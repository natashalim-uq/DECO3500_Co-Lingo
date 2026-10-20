import { Platform } from "react-native";
import { File } from "expo-file-system";
import * as FileSystem from "expo-file-system/legacy";
import { boostWav } from "./audioBoost";

const GROQ_URL = "https://api.groq.com/openai/v1/audio/transcriptions";
const API_KEY = process.env.EXPO_PUBLIC_GROQ_API_KEY;

// Most accurate first; falls back to the faster model if it's unavailable or rate-limited
const MODELS = ["whisper-large-v3", "whisper-large-v3-turbo"];
const LANGUAGE = "en";
// A hint that helps Whisper spell business words correctly. It deliberately does NOT
// contain the trigger phrases, because Whisper can echo its hint back on silence.
const HINT =
  "Business meeting. Jargon: synergy, stakeholders, deliverables, bandwidth, touch base, KPIs. The assistant is named BMO.";
const MIN_BYTES = 2000; // anything smaller is basically empty

// Whisper sometimes "hears" these in silence or background noise
const NOISE_PHRASES = new Set(["you", "thank you", "thanks", "thanks for watching", "bye", "okay"]);

type HttpError = Error & { status?: number };

function httpError(status: number, body: string): HttpError {
  const err: HttpError = new Error(`Groq ${status}: ${body}`);
  err.status = status;
  return err;
}

function cleanTranscript(text: string): string {
  const trimmed = text.trim();
  const normalized = trimmed.toLowerCase().replace(/[^a-z\s]/g, "").trim();
  if (normalized.length < 2 || NOISE_PHRASES.has(normalized)) return "";
  if (normalized.includes("the assistant is named bmo")) return ""; // Whisper echoing our hint
  return trimmed;
}

// Browser: a real Blob works fine in FormData
async function sendWeb(blob: Blob, model: string): Promise<string> {
  const form = new FormData();
  const ext = blob.type.includes("mp4") ? "m4a" : blob.type.includes("ogg") ? "ogg" : "webm";
  form.append("file", blob, `chunk.${ext}`);
  form.append("model", model);
  form.append("language", LANGUAGE);
  form.append("temperature", "0");
  form.append("prompt", HINT);

  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${API_KEY}` },
    body: form,
  });
  if (!res.ok) throw httpError(res.status, await res.text());
  const data = await res.json();
  return data.text ?? "";
}

// Phone: Expo's own multipart uploader, with the audio type set explicitly
async function sendNative(uri: string, model: string): Promise<string> {
  const res = await FileSystem.uploadAsync(GROQ_URL, uri, {
    httpMethod: "POST",
    uploadType: FileSystem.FileSystemUploadType.MULTIPART,
    fieldName: "file",
    mimeType: uri.toLowerCase().endsWith(".wav") ? "audio/wav" : "audio/m4a",
    headers: { Authorization: `Bearer ${API_KEY}` },
    parameters: { model, language: LANGUAGE, temperature: "0", prompt: HINT },
  });
  if (res.status !== 200) throw httpError(res.status, res.body);
  return JSON.parse(res.body).text ?? "";
}

// Try the best model first; only fall back if it's missing, busy, or having server trouble
async function withFallback(send: (model: string) => Promise<string>): Promise<string> {
  let lastError: unknown;
  for (const model of MODELS) {
    try {
      return cleanTranscript(await send(model));
    } catch (e) {
      lastError = e;
      const status = (e as HttpError).status;
      if (status && status !== 404 && status !== 429 && status < 500) throw e;
      console.warn(`Transcription on ${model} failed (${status ?? "network"}), trying next model`);
    }
  }
  throw lastError;
}

export async function transcribeAudio(uri: string): Promise<string> {
  if (!API_KEY) throw new Error("Missing EXPO_PUBLIC_GROQ_API_KEY in .env");

  if (Platform.OS === "web") {
    const blob = await (await fetch(uri)).blob();
    return withFallback((model) => sendWeb(blob, model));
  }

  const file = new File(uri);
  console.log("chunk:", { name: file.name, size: file.size });
  if (!file.exists || file.size < MIN_BYTES) return "";

  const prepared = file.name.toLowerCase().endsWith(".wav")
    ? await boostWav(uri)
    : { uri, level: 0, gain: 1, boosted: false };
  console.log(`level: ${prepared.level}  gain: ${prepared.gain.toFixed(1)}x`);

  try {
    return await withFallback((model) => sendNative(prepared.uri, model));
  } finally {
    if (prepared.boosted) {
      try {
        new File(prepared.uri).delete(); // clean up the louder copy
      } catch {
        // already gone, ignore
      }
    }
  }
}