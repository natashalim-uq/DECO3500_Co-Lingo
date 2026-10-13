import { Platform } from "react-native";
import { File } from "expo-file-system";
import * as FileSystem from "expo-file-system/legacy";

const GROQ_URL = "https://api.groq.com/openai/v1/audio/transcriptions";
const API_KEY = process.env.EXPO_PUBLIC_GROQ_API_KEY;

const MODEL = "whisper-large-v3-turbo";
const LANGUAGE = "en";
// Short hint so Whisper spells the name right. Deliberately does NOT contain
// the trigger phrase, because Whisper can echo its prompt back on silence.
const HINT = "Business meeting. The assistant is named BMO.";
const MIN_BYTES = 2000; // anything smaller is basically silence/empty

// Whisper sometimes "hears" these in silence or background noise
const NOISE_PHRASES = new Set([
  "you",
  "thank you",
  "thanks",
  "thanks for watching",
  "bye",
  "okay",
]);

function cleanTranscript(text: string): string {
  const trimmed = text.trim();
  const normalized = trimmed.toLowerCase().replace(/[^a-z\s]/g, "").trim();
  if (normalized.length < 2 || NOISE_PHRASES.has(normalized)) return "";
  return trimmed;
}

// Browser: a real Blob works fine in FormData
async function transcribeWeb(uri: string): Promise<string> {
  const form = new FormData();
  const blob = await (await fetch(uri)).blob();
  const ext = blob.type.includes("mp4") ? "m4a" : blob.type.includes("ogg") ? "ogg" : "webm";
  form.append("file", blob, `chunk.${ext}`);
  form.append("model", MODEL);
  form.append("language", LANGUAGE);
  form.append("temperature", "0");
  form.append("prompt", HINT);

  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${API_KEY}` },
    body: form,
  });
  if (!res.ok) throw new Error(`Groq ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return cleanTranscript(data.text ?? "");
}

// Phone: Expo's own multipart uploader, with the audio type set explicitly
async function transcribeNative(uri: string): Promise<string> {
  const file = new File(uri);
  console.log("chunk:", { uri, exists: file.exists, size: file.size, type: file.type, name: file.name });
  if (!file.exists || file.size < MIN_BYTES) return "";

  const res = await FileSystem.uploadAsync(GROQ_URL, uri, {
    httpMethod: "POST",
    uploadType: FileSystem.FileSystemUploadType.MULTIPART,
    fieldName: "file",
    mimeType: file.name.toLowerCase().endsWith(".wav") ? "audio/wav" : "audio/m4a",
    headers: { Authorization: `Bearer ${API_KEY}` },
    parameters: {
      model: MODEL,
      language: LANGUAGE,
      temperature: "0",
      prompt: HINT,
    },
  });

  if (res.status !== 200) throw new Error(`Groq ${res.status}: ${res.body}`);
  const data = JSON.parse(res.body);
  return cleanTranscript(data.text ?? "");
}

export async function transcribeAudio(uri: string): Promise<string> {
  if (!API_KEY) throw new Error("Missing EXPO_PUBLIC_GROQ_API_KEY in .env");
  return Platform.OS === "web" ? transcribeWeb(uri) : transcribeNative(uri);
}