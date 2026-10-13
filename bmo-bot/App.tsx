import { useEffect, useRef, useState } from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useKeepAwake } from "expo-keep-awake";
import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p";
import Face from "./components/Face";
import type { RobotState } from "./types/robot";

const DEBUG = true; // set to false when you no longer want the state chips
const STATES: RobotState[] = ["sleep", "active", "loading", "speaking", "timeout"];

export default function App() {
  useKeepAwake();
  const [fontsLoaded] = useFonts({ PressStart2P_400Regular });
  const [state, setState] = useState<RobotState>("sleep");
  const wakeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE).catch(() => {
      // not supported on web, ignore
    });
    return () => {
      if (wakeTimer.current) clearTimeout(wakeTimer.current);
    };
  }, []);

  const goTo = (next: RobotState) => {
    if (wakeTimer.current) clearTimeout(wakeTimer.current);
    setState(next);
  };

  const handleStart = () => {
    goTo("loading");
    // Later: this is where we'll ask for mic permission and start recording
    wakeTimer.current = setTimeout(() => setState("active"), 1500);
  };

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
        <Pressable style={styles.overlay} onPress={() => goTo("sleep")}>
          <Text style={styles.message}>OOPS! SOMETHING WENT WRONG</Text>
          <Text style={styles.subMessage}>TAP TO RESTART</Text>
        </Pressable>
      )}

      {DEBUG && (
        <View style={styles.debug}>
          {STATES.map((s) => (
            <Pressable key={s} onPress={() => goTo(s)} style={styles.chip}>
              <Text style={styles.chipText}>{s}</Text>
            </Pressable>
          ))}
        </View>
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
  message: {
    fontFamily: "PressStart2P_400Regular",
    fontSize: 18,
    color: "black",
  },
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
});