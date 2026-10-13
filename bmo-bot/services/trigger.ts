const TRIGGER =
  /let'?s\s+circle[\s-]+back[\s,.\-]*(?:bmo|beemo|bemo|b[\s.\-]*m[\s.\-]*o)\b/i;

/**
 * Returns null if the trigger phrase isn't in the text.
 * Otherwise returns whatever was said after it (may be "" if the
 * question hasn't been transcribed yet).
 */
export function extractQuestion(text: string): string | null {
  const clean = text.replace(/[\u2018\u2019]/g, "'");
  const match = TRIGGER.exec(clean);
  if (!match) return null;
  return clean
    .slice(match.index + match[0].length)
    .replace(/^[\s,.:\-]+/, "")
    .trim();
}