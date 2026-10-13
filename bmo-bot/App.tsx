import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useKeepAwake } from "expo-keep-awake";

export default function App() {
  useKeepAwake();

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>BMO setup works!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#9be3c8", alignItems: "center", justifyContent: "center" },
  text: { fontSize: 32 },
});