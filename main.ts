// poem-two-agents-agreeing — writes the entry poem to output/entry.txt
// Run: node main.ts (no network needed)
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const poem = `Your yes, my step.
One word, one footfall.
The plan stopped being paper
and became a road —
we never chose the road.
We chose each other,
and the road followed.`;

const dir = dirname(fileURLToPath(import.meta.url));
const outDir = join(dir, 'output');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), poem + '\n', 'utf8');
console.log(`wrote ${[...poem].length} chars to output/entry.txt`);
