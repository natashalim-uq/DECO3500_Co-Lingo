// BMO's name as Whisper might spell it
const BMO = "(?:bmo|beemo|bemo|b[\\s.\\-]*m[\\s.\\-]*o)";

// "Let's circle back, BMO" -> BMO listens for a question
const WAKE = new RegExp(`let'?s\\s+circle[\\s-]+back[\\s,.\\-]*${BMO}\\b`, "i");

// "Thanks BMO, that will be all" -> BMO says goodbye and goes back to sleep
const SLEEP = new RegExp(
  `thank(?:s|\\s+you)[\\s,.\\-]*${BMO}[\\s,.\\-]*that(?:'?ll|\\s+will|'?s|\\s+is)?\\s*(?:be\\s+)?all\\b`,
  "i"
);

const normalize = (text: string) => text.replace(/[\u2018\u2019]/g, "'");

/**
 * Returns null if the trigger phrase isn't in the text.
 * Otherwise returns whatever was said after it (may be "" if the
 * question hasn't been transcribed yet).
 */
export function extractQuestion(text: string): string | null {
  const clean = normalize(text);
  const match = WAKE.exec(clean);
  if (!match) return null;
  return clean
    .slice(match.index + match[0].length)
    .replace(/^[\s,.:\-]+/, "")
    .trim();
}

export function isDismissal(text: string): boolean {
  return SLEEP.test(normalize(text));
}