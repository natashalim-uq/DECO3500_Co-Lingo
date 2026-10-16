import * as Speech from "expo-speech";

// ---- BMO's default voice: paste your favourite settings from the voice tuner here ----
const DEFAULT_VOICE_NAME = ""; // e.g. "Samantha". Empty = pick the best English voice automatically
const DEFAULT_PITCH = 0.75; // 1 = normal, higher = squeakier/younger (range 0.5 to 2)
const DEFAULT_RATE = 0.9; // 1 = normal, a bit under 1 is easier for non-native listeners
const PREFERRED_NAMES = ["Samantha", "Nicky", "Zoe", "Ava", "Allison"];

type VoiceSettings = { voiceId?: string; pitch: number; rate: number };

const settings: VoiceSettings = {
  voiceId: undefined,
  pitch: DEFAULT_PITCH,
  rate: DEFAULT_RATE,
};

let voices: Speech.Voice[] = [];
let ready: Promise<void> | null = null;

function scoreVoice(v: Speech.Voice): number {
  let s = 0;
  if (DEFAULT_VOICE_NAME && (v.name.includes(DEFAULT_VOICE_NAME) || v.identifier === DEFAULT_VOICE_NAME)) s += 100;
  if (v.quality === Speech.VoiceQuality.Enhanced) s += 10;
  if (PREFERRED_NAMES.some((n) => v.name.includes(n))) s += 5;
  if (v.language === "en-US") s += 2;
  return s;
}

// Finds the English voices once, best first, and picks the top one
export function warmUpVoice(): Promise<void> {
  if (!ready) {
    ready = (async () => {
      try {
        const all = await Speech.getAvailableVoicesAsync();
        voices = all
          .filter((v) => v.language?.toLowerCase().startsWith("en"))
          .sort((a, b) => scoreVoice(b) - scoreVoice(a));
        if (!settings.voiceId && voices[0]) settings.voiceId = voices[0].identifier;
        console.log("BMO voice:", voices[0]?.name, voices[0]?.quality);
      } catch (e) {
        console.warn("Could not load voices, using default:", e);
      }
    })();
  }
  return ready;
}

export async function listEnglishVoices(): Promise<Speech.Voice[]> {
  await warmUpVoice();
  return voices;
}

export async function logEnglishVoices() {
  const list = await listEnglishVoices();
  list.forEach((v) => console.log(`VOICE: ${v.name} | ${v.language} | ${v.quality}`));
}

export function getVoiceSettings(): VoiceSettings {
  return { ...settings };
}

export function updateVoiceSettings(patch: Partial<VoiceSettings>) {
  Object.assign(settings, patch);
}

export async function speak(text: string): Promise<void> {
  await warmUpVoice();
  const spoken = text.replace(/\bBMO\b/g, "Beemo"); // so it says a name, not three letters

  return new Promise((resolve) => {
    let finished = false;
    const done = () => {
      if (finished) return;
      finished = true;
      clearTimeout(fallback);
      resolve();
    };
    // Safety net: browsers sometimes never fire onDone
    const fallback = setTimeout(done, Math.max(4000, spoken.length * 150));

    Speech.speak(spoken, {
      voice: settings.voiceId,
      language: "en-US",
      pitch: settings.pitch,
      rate: settings.rate,
      onDone: done,
      onStopped: done,
      onError: done,
    });
  });
}

export function stopSpeaking() {
  Speech.stop();
}