import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import type { Voice } from "expo-speech";
import {
  getVoiceSettings,
  listEnglishVoices,
  speak,
  stopSpeaking,
  updateVoiceSettings,
} from "../services/speech";

const SAMPLE = "Hi, I'm BMO! Touch base means to have a quick chat.";
const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
const round2 = (n: number) => Math.round(n * 100) / 100;

export default function VoiceTuner() {
  const [open, setOpen] = useState(false);
  const [voices, setVoices] = useState<Voice[]>([]);
  const [index, setIndex] = useState(0);
  const [pitch, setPitch] = useState(getVoiceSettings().pitch);
  const [rate, setRate] = useState(getVoiceSettings().rate);

  useEffect(() => {
    listEnglishVoices().then((list) => {
      setVoices(list);
      const current = getVoiceSettings().voiceId;
      const i = list.findIndex((v) => v.identifier === current);
      setIndex(i >= 0 ? i : 0);
    });
  }, []);

  const voice = voices[index];

  function toggle() {
    stopSpeaking();
    setOpen((o) => !o);
  }

  function test() {
    stopSpeaking();
    speak(SAMPLE);
  }

  function report(name: string | undefined, p: number, r: number) {
    console.log(
      `VOICE SETTINGS -> DEFAULT_VOICE_NAME = "${name ?? ""}"; DEFAULT_PITCH = ${p}; DEFAULT_RATE = ${r};`
    );
  }

  function changeVoice(step: number) {
    if (!voices.length) return;
    const i = (index + step + voices.length) % voices.length;
    setIndex(i);
    updateVoiceSettings({ voiceId: voices[i].identifier });
    report(voices[i].name, pitch, rate);
    test();
  }

  function changePitch(step: number) {
    const next = round2(clamp(pitch + step, 0.5, 2));
    setPitch(next);
    updateVoiceSettings({ pitch: next });
    report(voice?.name, next, rate);
    test();
  }

  function changeRate(step: number) {
    const next = round2(clamp(rate + step, 0.5, 1.5));
    setRate(next);
    updateVoiceSettings({ rate: next });
    report(voice?.name, pitch, next);
    test();
  }

  return (
    <View style={styles.wrap} pointerEvents="box-none">
      <Pressable onPress={toggle} style={styles.icon}>
        <Text style={styles.iconText}>{open ? "✕" : "🔊"}</Text>
      </Pressable>

      {open && (
        <View style={styles.panel}>
          <Text style={styles.title}>VOICE TUNER</Text>

          <View style={styles.row}>
            <Btn label="◀" onPress={() => changeVoice(-1)} />
            <Text style={styles.value} numberOfLines={1}>
              {voice ? `${voice.name} (${voice.quality})` : "loading..."}
            </Text>
            <Btn label="▶" onPress={() => changeVoice(1)} />
          </View>

          <View style={styles.row}>
            <Btn label="−" onPress={() => changePitch(-0.1)} />
            <Text style={styles.value}>pitch {pitch.toFixed(2)}</Text>
            <Btn label="+" onPress={() => changePitch(0.1)} />
          </View>

          <View style={styles.row}>
            <Btn label="−" onPress={() => changeRate(-0.05)} />
            <Text style={styles.value}>speed {rate.toFixed(2)}</Text>
            <Btn label="+" onPress={() => changeRate(0.05)} />
          </View>

          <Pressable onPress={test} style={styles.test}>
            <Text style={styles.btnText}>TEST VOICE</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

function Btn({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Text style={styles.btnText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    top: 12,
    right: 12,
    alignItems: "flex-end",
    gap: 8,
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: { fontSize: 20, color: "white" },
  panel: {
    width: 270,
    padding: 12,
    gap: 8,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  title: { color: "white", fontWeight: "bold", textAlign: "center" },
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  value: { flex: 1, color: "white", textAlign: "center", fontSize: 13 },
  btn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#396337",
    alignItems: "center",
    justifyContent: "center",
  },
  test: {
    height: 38,
    borderRadius: 12,
    backgroundColor: "#A2B36A",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { color: "white", fontWeight: "bold" },
});