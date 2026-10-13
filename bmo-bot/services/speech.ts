import * as Speech from "expo-speech";

export function speak(text: string): Promise<void> {
  return new Promise((resolve) => {
    let finished = false;
    const done = () => {
      if (finished) return;
      finished = true;
      clearTimeout(fallback);
      resolve();
    };
    // Safety net: browsers sometimes never fire onDone
    const fallback = setTimeout(done, Math.max(4000, text.length * 150));

    Speech.speak(text, {
      language: "en-US",
      rate: 0.95,
      onDone: done,
      onStopped: done,
      onError: done,
    });
  });
}

export function stopSpeaking() {
  Speech.stop();
}