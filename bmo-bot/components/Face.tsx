import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import type { RobotState } from "../types/robot";

import SleepFace from "../assets/sleep.svg";
import LoadingFace from "../assets/loading.svg";
import ActiveFace from "../assets/active.svg";
import SpeakingFace from "../assets/speaking.svg";
import TimeoutFace from "../assets/timeout.svg";

const FACES = {
  sleep: SleepFace,
  loading: LoadingFace,
  active: ActiveFace,
  speaking: SpeakingFace,
  timeout: TimeoutFace,
} as const;

type FaceKey = keyof typeof FACES;
type Props = { state: RobotState };

export default function Face({ state }: Props) {
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);
  const [mouthOpen, setMouthOpen] = useState(false);
  const [blinking, setBlinking] = useState(false);

  // Breathing (active) and wobble (loading)
  useEffect(() => {
    cancelAnimation(scale);
    cancelAnimation(rotate);
    scale.value = withTiming(1, { duration: 150 });
    rotate.value = withTiming(0, { duration: 150 });

    if (state === "active") {
      scale.value = withRepeat(
        withSequence(
          withTiming(1.015, { duration: 1800, easing: Easing.inOut(Easing.sin) }),
          withTiming(1, { duration: 1800, easing: Easing.inOut(Easing.sin) })
        ),
        -1
      );
    } else if (state === "loading") {
      rotate.value = withRepeat(
        withSequence(
          withTiming(-1.5, { duration: 700, easing: Easing.inOut(Easing.sin) }),
          withTiming(1.5, { duration: 700, easing: Easing.inOut(Easing.sin) })
        ),
        -1,
        true
      );
    }
  }, [state]);

  // Mouth flapping while speaking: swap Active <-> Speaking face
  useEffect(() => {
    if (state !== "speaking") {
      setMouthOpen(false);
      return;
    }
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const flap = () => {
      if (cancelled) return;
      setMouthOpen((prev) => !prev);
      timer = setTimeout(flap, 120 + Math.random() * 140); // 120-260 ms
    };
    flap();

    return () => {
      cancelled = true;
      clearTimeout(timer);
      setMouthOpen(false);
    };
  }, [state]);

  // Random blinking while active
  useEffect(() => {
    if (state !== "active") {
      setBlinking(false);
      return;
    }
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const scheduleBlink = () => {
      timer = setTimeout(() => {
        if (cancelled) return;
        setBlinking(true);
        timer = setTimeout(() => {
          if (cancelled) return;
          setBlinking(false);
          scheduleBlink();
        }, 140);
      }, 2500 + Math.random() * 3500); // every 2.5-6 s
    };
    scheduleBlink();

    return () => {
      cancelled = true;
      clearTimeout(timer);
      setBlinking(false);
    };
  }, [state]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
  }));

  // Which face is visible right now
  let visible: FaceKey = state;
  if (state === "speaking") visible = mouthOpen ? "speaking" : "active";
  if (state === "active" && blinking) visible = "sleep";

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.face, animatedStyle]}>
        {(Object.keys(FACES) as FaceKey[]).map((key) => {
          const Svg = FACES[key];
          return (
            <View
              key={key}
              style={[StyleSheet.absoluteFill, { opacity: key === visible ? 1 : 0 }]}
            >
              <Svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#C9E4C3" },
  face: { flex: 1 },
});