import { Platform } from "react-native";

const GROQ_URL = "https://api.groq.com/openai/v1/audio/transcriptions";
const API_KEY = process.env.EXPO_PUBLIC_GROQ_API_KEY;

// Whisper sometimes "hears" these in silence or background noise
const NOISE_PHRASES = new Set([
  "you",
  "thank you",
  "thanks",
  "thanks for watching",
  "bye",
  "okay",
]);

export async function transcribeAudio(uri: string): Promise<string> {
  if (!API_KEY) throw new Error("Missing EXPO_PUBLIC_GROQ_API_KEY in .env");

  const form = new FormData();

  if (Platform.OS === "web") {
    const blob = await (await fetch(uri)).blob();
    const ext = blob.type.includes("mp4") ? "m4a" : blob.type.includes("ogg") ? "ogg" : "webm";
    form.append("file", blob, `chunk.${ext}`);
  } else {
    form.append("file", { uri, name: "chunk.m4a", type: "audio/m4a" } as unknown as Blob);
  }

  form.append("model", "whisper-large-v3-turbo");
  form.append("language", "en");
  form.append("temperature", "0");
  // Short hint so Whisper spells the name right. Deliberately does NOT contain
  // the trigger phrase, because Whisper can echo its prompt back on silence.
  form.append("prompt", "Business meeting. The assistant is named BMO.");

  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${API_KEY}` }, // don't set Content-Type, fetch does it
    body: form,
  });

  if (!res.ok) throw new Error(`Groq ${res.status}: ${await res.text()}`);

  const data = await res.json();
  const text: string = (data.text ?? "").trim();

  const normalized = text.toLowerCase().replace(/[^a-z\s]/g, "").trim();
  if (normalized.length < 2 || NOISE_PHRASES.has(normalized)) return "";
  return text;
}