import { useEffect } from "react";
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

type Props = { state: RobotState };

export default function Face({ state }: Props) {
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);

  useEffect(() => {
    cancelAnimation(scale);
    cancelAnimation(rotate);
    scale.value = withTiming(1, { duration: 150 });
    rotate.value = withTiming(0, { duration: 150 });

    if (state === "active") {
      // slow breathing
      scale.value = withRepeat(
        withSequence(
          withTiming(1.015, { duration: 1800, easing: Easing.inOut(Easing.sin) }),
          withTiming(1, { duration: 1800, easing: Easing.inOut(Easing.sin) })
        ),
        -1
      );
    } else if (state === "speaking") {
      // quick talking bounce
      scale.value = withRepeat(
        withSequence(
          withTiming(1.03, { duration: 160 }),
          withTiming(0.99, { duration: 160 })
        ),
        -1
      );
    } else if (state === "loading") {
      // thinking wobble
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

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
  }));

  const Current = FACES[state];

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.face, animatedStyle]}>
        <Current width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#C9E4C3" },
  face: { flex: 1 },
});