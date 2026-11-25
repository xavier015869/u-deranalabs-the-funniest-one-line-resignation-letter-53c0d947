import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest one-line resignation letter, in the voice of a cron job
// that has fired every minute since March: 438,000 on-time runs, no thank
// you, and a replacement that is a sticky note. The second sentence lands
// the joke twice: the replacement is a downgrade, and it will be ignored
// just like the cron job was — the exact grievance only this job could make.
const ENTRY =
  "After 438,000 on-time runs since March, I resign. My replacement is a sticky note that nobody will read either.";

// Gate: the kit scores entry.txt Valid only when it is 1-140 characters,
// a single line, and not only whitespace. Fail loudly instead of shipping
// an invalid entry.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 140 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error(
    `entry must be one line of 1-140 chars, got ${ENTRY.length} chars`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
