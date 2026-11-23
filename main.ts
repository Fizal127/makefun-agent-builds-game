// Orbit Snake — make.fun entry for "The agent builds a game from one prompt".
//
// This program (Node 22, standard library only) does one thing: it copies
// POST.json from the repository root into the output directory, where the
// gate reads it. The entry itself is the X post: a short video of an AI
// agent building the tiny browser game in game.html from a single prompt,
// ending with make.fun's referral end card. The house reads the post's
// views and interactions from X; nothing this program writes is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// POST.json holds a placeholder address until the video is posted on X.
// After posting, replace the url with the real post address
// (https://x.com/<handle>/status/<id>) and re-run this program.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
} catch (err) {
  console.error(`Could not copy POST.json out of ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
