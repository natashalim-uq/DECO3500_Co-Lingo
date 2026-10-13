import { useEffect, useRef, useState } from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useKeepAwake } from "expo-keep-awake";
import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p";
import Face from "./components/Face";
import { CHUNK_MS, useListener } from "./hooks/useMeetingListener";
import { extractQuestion } from "./services/trigger";
import { speak, stopSpeaking } from "./services/speech";
import type { RobotState } from "./types/robot";

const DEBUG = true; // chips + "heard" text; set to false for the demo
const STATES: RobotState[] = ["sleep", "active", "loading", "speaking", "timeout"];
const MAX_TRANSCRIPT_LINES = 150; // ~20 minutes of meeting at 8 s per chunk
const ENDS_SENTENCE = /[.?!]["')\]]?\s*$/;
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function App() {
  useKeepAwake();
  const [fontsLoaded] = useFonts({ PressStart2P_400Regular });
  const [state, setState] = useState<RobotState>("sleep");
  const [errorMessage, setErrorMessage] = useState("SOMETHING WENT WRONG");
  const [lastHeard, setLastHeard] = useState("");

  const transcript = useRef<string[]>([]);
  const pendingQuestion = useRef<string | null>(null);
  const pendingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const busy = useRef(false);
  const runId = useRef(0);

  const listener = useListener({
    onTranscript: handleTranscript,
    onFatalError: (e) => fail(e, "CAN'T HEAR OR REACH THE INTERNET"),
  });

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE).catch(() => {
      // not supported on web, ignore
    });
  }, []);

  function clearPending() {
    if (pendingTimer.current) clearTimeout(pendingTimer.current);
    pendingTimer.current = null;
    pendingQuestion.current = null;
  }

  function resetTo(next: RobotState) {
    runId.current += 1; // cancels any answer() that is still running
    stopSpeaking();
    listener.stop();
    clearPending();
    busy.current = false;
    setState(next);
  }

  function fail(error: unknown, message = "SOMETHING WENT WRONG") {
    console.warn("BMO error:", error);
    setErrorMessage(message);
    resetTo("timeout");
  }

  async function handleStart() {
    setState("loading");
    try {
      await Promise.all([listener.start(), delay(1200)]);
      setState("active");
    } catch (e) {
      const denied = e instanceof Error && e.message === "MIC_DENIED";
      fail(e, denied ? "MIC ACCESS NEEDED" : "SOMETHING WENT WRONG");
    }
  }

  function handleTranscript(text: string) {
    if (busy.current) return;
    console.log("Heard:", text);
    setLastHeard(text);

    transcript.current.push(text);
    if (transcript.current.length > MAX_TRANSCRIPT_LINES) transcript.current.shift();

    // The question started in the previous chunk and continues in this one
    if (pendingQuestion.current !== null) {
      const full = `${pendingQuestion.current} ${text}`.trim();
      clearPending();
      answer(full);
      return;
    }

    const question = extractQuestion(text);
    if (question === null) return; // no trigger phrase, just meeting talk

    if (question && ENDS_SENTENCE.test(question)) {
      answer(question);
      return;
    }

    // Trigger heard but the question isn't finished (cut off at the chunk edge).
    // Wait for the next chunk; if nothing comes, use what we have.
    pendingQuestion.current = question;
    pendingTimer.current = setTimeout(() => {
      const q = pendingQuestion.current;
      clearPending();
      if (q) answer(q);
    }, CHUNK_MS + 6000);
  }

  async function answer(question: string) {
    if (busy.current) return;
    busy.current = true;
    const id = ++runId.current;
    const cancelled = () => id !== runId.current;

    try {
      await listener.stop(); // don't listen while the robot talks
      if (cancelled()) return;

      setState("speaking");
      await speak("Let me think!");
      if (cancelled()) return;

      setState("loading");
      // NEXT STEP: ask the LLM here, passing transcript.current as meeting context
      await delay(1500);
      if (cancelled()) return;

      setState("speaking");
      await speak(`You asked: ${question}`);
      if (cancelled()) return;

      setState("active");
      await listener.start();
    } catch (e) {
      if (!cancelled()) fail(e);
    } finally {
      if (!cancelled()) busy.current = false;
    }
  }

  if (!fontsLoaded) return <View style={styles.root} />;

  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <Face state={state} />

      {state === "sleep" && (
        <Pressable style={styles.overlay} onPress={handleStart}>
          <Text style={styles.startButton}>PRESS TO START</Text>
        </Pressable>
      )}

      {state === "timeout" && (
        <Pressable style={styles.overlay} onPress={() => resetTo("sleep")}>
          <Text style={styles.message}>{errorMessage}</Text>
          <Text style={styles.subMessage}>TAP TO RESTART</Text>
        </Pressable>
      )}

      {DEBUG && (
        <>
          <View style={styles.debug}>
            {STATES.map((s) => (
              <Pressable key={s} onPress={() => resetTo(s)} style={styles.chip}>
                <Text style={styles.chipText}>{s}</Text>
              </Pressable>
            ))}
          </View>
          {!!lastHeard && state !== "sleep" && state !== "timeout" && (
            <Text style={styles.heard} numberOfLines={2}>
              heard: {lastHeard}
            </Text>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#C9E4C3" },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 48,
  },
  startButton: {
    fontFamily: "PressStart2P_400Regular",
    fontSize: 20,
    color: "black",
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: "#A2B36A",
    overflow: "hidden",
  },
  message: { fontFamily: "PressStart2P_400Regular", fontSize: 18, color: "black" },
  subMessage: {
    fontFamily: "PressStart2P_400Regular",
    fontSize: 12,
    color: "#396337",
    marginTop: 10,
  },
  debug: {
    position: "absolute",
    top: 12,
    alignSelf: "center",
    flexDirection: "row",
    gap: 8,
  },
  chip: {
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
  },
  chipText: { color: "white" },
  heard: {
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    textAlign: "center",
    color: "#396337",
    fontSize: 14,
  },
});