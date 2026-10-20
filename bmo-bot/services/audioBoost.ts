import { File, Paths } from "expo-file-system";

const TARGET_LEVEL = 0.85 * 32767; // how loud we want speech to end up
const MAX_GAIN = 10; // never boost more than 10x
const MIN_LEVEL = 200; // quieter than this is basically silence, so don't boost it

export type BoostResult = { uri: string; level: number; gain: number; boosted: boolean };

function tag(view: DataView, at: number): string {
  return String.fromCharCode(
    view.getUint8(at),
    view.getUint8(at + 1),
    view.getUint8(at + 2),
    view.getUint8(at + 3)
  );
}

// Makes quiet 16-bit WAV recordings louder. Falls back to the original file on any problem.
export async function boostWav(uri: string): Promise<BoostResult> {
  const unchanged = (level = 0): BoostResult => ({ uri, level, gain: 1, boosted: false });

  try {
    const bytes = await new File(uri).bytes();
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    if (bytes.length < 44 || tag(view, 0) !== "RIFF" || tag(view, 8) !== "WAVE") {
      return unchanged();
    }

    // Walk the WAV chunks to find the audio format and where the sound data starts
    let pos = 12;
    let format = 0;
    let bits = 0;
    let dataStart = -1;
    let dataLen = 0;
    while (pos + 8 <= bytes.length) {
      const id = tag(view, pos);
      const size = view.getUint32(pos + 4, true);
      if (id === "fmt ") {
        format = view.getUint16(pos + 8, true);
        bits = view.getUint16(pos + 22, true);
      }
      if (id === "data") {
        dataStart = pos + 8;
        const remaining = bytes.length - dataStart;
        dataLen = size === 0 || size > remaining ? remaining : size;
        break;
      }
      pos += 8 + size + (size % 2);
    }
    if (dataStart < 0 || bits !== 16 || (format !== 1 && format !== 0xfffe)) {
      return unchanged();
    }

    // Measure loudness: the level that 99.5% of samples stay below (ignores clicks and bumps)
    const end = dataStart + dataLen - (dataLen % 2);
    const bins = new Uint32Array(256);
    let count = 0;
    for (let i = dataStart; i < end; i += 2) {
      bins[Math.min(255, Math.abs(view.getInt16(i, true)) >> 7)]++;
      count++;
    }
    let seen = 0;
    let level = 0;
    for (let b = 0; b < 256; b++) {
      seen += bins[b];
      if (seen >= count * 0.995) {
        level = (b + 1) * 128;
        break;
      }
    }

    if (level < MIN_LEVEL) return unchanged(level);
    const gain = Math.min(MAX_GAIN, TARGET_LEVEL / level);
    if (gain < 1.2) return unchanged(level); // already loud enough

    for (let i = dataStart; i < end; i += 2) {
      const s = Math.round(view.getInt16(i, true) * gain);
      view.setInt16(i, Math.max(-32768, Math.min(32767, s)), true);
    }

    const out = new File(Paths.cache, `boost-${Date.now()}.wav`);
    out.create({ overwrite: true });
    out.write(bytes);
    return { uri: out.uri, level, gain, boosted: true };
  } catch (e) {
    console.warn("Audio boost failed, using original:", e);
    return unchanged();
  }
}