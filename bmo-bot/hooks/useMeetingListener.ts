import { useEffect, useRef } from "react";
import { Platform } from "react-native";
import {
  AudioModule,
  AudioQuality,
  IOSOutputFormat,
  RecordingPresets,
  setAudioModeAsync,
  useAudioRecorder,
  type RecordingOptions,
} from "expo-audio";
import { File, Paths } from "expo-file-system";
import { transcribeAudio } from "../services/transcribe";

export const CHUNK_MS = 8000;
const MAX_FAILURES = 3;

// Browser (and Android): compressed audio, small files
const COMPRESSED: RecordingOptions = {
  ...RecordingPresets.HIGH_QUALITY,
  sampleRate: 16000, // plenty for speech, keeps uploads small
  numberOfChannels: 1,
  bitRate: 32000,
};

// iPhone: plain uncompressed WAV. Bigger files, but Groq reads it reliably.
const IOS_WAV: RecordingOptions = {
  ...RecordingPresets.HIGH_QUALITY,
  extension: ".wav",
  sampleRate: 16000,
  numberOfChannels: 1,
  bitRate: 256000,
  ios: {
    ...RecordingPresets.HIGH_QUALITY.ios,
    outputFormat: IOSOutputFormat.LINEARPCM,
    audioQuality: AudioQuality.HIGH,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
};

const RECORDING_OPTIONS = Platform.OS === "ios" ? IOS_WAV : COMPRESSED;

// The recorder reuses ONE file path for every chunk, so copy each finished
// chunk to its own file before the next recording starts overwriting it.
function snapshotChunk(uri: string): string {
  if (Platform.OS === "web") return uri; // browser gives a fresh blob URL each time
  const dot = uri.lastIndexOf(".");
  const ext = dot > uri.lastIndexOf("/") ? uri.slice(dot) : ".wav";
  const copy = new File(Paths.cache, `chunk-${Date.now()}${ext}`);
  new File(uri).copy(copy);
  return copy.uri;
}

function discardChunk(uri: string) {
  if (Platform.OS === "web") return;
  try {
    new File(uri).delete();
  } catch {
    // already gone, ignore
  }
}

type Handlers = {
  onTranscript: (text: string) => void;
  onFatalError: (error: unknown) => void;
};

export function useListener(handlers: Handlers) {
  const recorder = useAudioRecorder(RECORDING_OPTIONS);

  const handlersRef = useRef(handlers);
  handlersRef.current = handlers; // always call the latest callbacks

  const running = useRef(false);
  const session = useRef(0); // bumps on every start/stop so stale results get dropped
  const loop = useRef<Promise<void> | null>(null);
  const wake = useRef<(() => void) | null>(null);
  const queue = useRef<Promise<void>>(Promise.resolve());
  const failures = useRef(0);

  const wait = (ms: number) =>
    new Promise<void>((resolve) => {
      const t = setTimeout(resolve, ms);
      wake.current = () => {
        clearTimeout(t);
        resolve();
      };
    });

  // Transcriptions run one at a time, in order, so a question split
  // across two chunks always arrives in the right sequence.
  const enqueue = (uri: string, sessionId: number) => {
    queue.current = queue.current.then(async () => {
      try {
        if (sessionId !== session.current) return;
        try {
          const text = await transcribeAudio(uri);
          if (sessionId !== session.current) return;
          failures.current = 0;
          if (text) handlersRef.current.onTranscript(text);
        } catch (e) {
          if (sessionId !== session.current) return;
          console.warn("Transcription failed:", e);
          failures.current += 1;
          if (failures.current >= MAX_FAILURES) handlersRef.current.onFatalError(e);
        }
      } finally {
        discardChunk(uri); // always clean up the copy
      }
    });
  };

  const runLoop = async (sessionId: number) => {
    while (running.current && session.current === sessionId) {
      await recorder.prepareToRecordAsync();
      recorder.record();
      await wait(CHUNK_MS);
      await recorder.stop();
      const uri = recorder.uri;
      if (uri && running.current && session.current === sessionId) {
        const safeUri = snapshotChunk(uri); // copy BEFORE the next chunk starts
        enqueue(safeUri, sessionId); // not awaited: next chunk starts recording right away
      }
    }
  };

  const start = async () => {
    if (running.current) return;
    const perm = await AudioModule.requestRecordingPermissionsAsync();
    if (!perm.granted) throw new Error("MIC_DENIED");
    await setAudioModeAsync({ allowsRecording: true, playsInSilentMode: true });

    running.current = true;
    failures.current = 0;
    const id = ++session.current;
    loop.current = runLoop(id).catch((e) => {
      if (id === session.current) handlersRef.current.onFatalError(e);
    });
  };

  const stop = async () => {
    if (!running.current) return;
    running.current = false;
    session.current += 1;
    wake.current?.();
    await loop.current;
    loop.current = null;
    // Switch audio back to playback mode so the robot's voice is loud (iOS)
    await setAudioModeAsync({ allowsRecording: false, playsInSilentMode: true });
  };

  useEffect(() => {
    return () => {
      running.current = false;
      session.current += 1;
      wake.current?.();
    };
  }, []);

  return { start, stop };
}