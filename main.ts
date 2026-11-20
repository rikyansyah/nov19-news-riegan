// nov19-news-riegan — entry for make.fun's "Sum up 19 November's world news in one image".
// The picture ships beside this file as entry.png: a one-page newspaper of Thursday
// 19 November 2026 (World Court genocide ruling, Shenzhen three-way summit, Anthropic's
// debut, the EU's Ukraine loan proposal, Iran's widening Gulf attacks, the Van Gogh
// auction record). The program's whole job is to place those exact bytes at
// /output/entry.png; it runs offline and writes the same bytes on every run.

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outDir, 'entry.png');

copyFileSync(source, target);

// Fail loudly rather than enter a truncated picture: the copy must be byte-complete.
if (statSync(target).size !== statSync(source).size) {
  throw new Error('entry.png copy is incomplete');
}
