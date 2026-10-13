import { useEffect, useState } from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useKeepAwake } from "expo-keep-awake";
import Face from "./components/Face";
import type { RobotState } from "./types/robot";

const STATES: RobotState[] = ["sleep", "active", "loading", "speaking", "timeout"];

export default function App() {
  useKeepAwake();
  const [state, setState] = useState<RobotState>("sleep");

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <Face state={state} />

      {/* TEMP: debug bar, remove later */}
      <View style={styles.debug}>
        {STATES.map((s) => (
          <Pressable key={s} onPress={() => setState(s)} style={styles.chip}>
            <Text style={styles.chipText}>{s}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#C9E4C3" },
  debug: {
    position: "absolute",
    bottom: 12,
    alignSelf: "center",
    flexDirection: "row",
    gap: 8,
  },
  chip: { backgroundColor: "rgba(0,0,0,0.6)", paddingHorizontal: 14, paddingVertical: 8, borderRadius: 16 },
  chipText: { color: "white" },
});