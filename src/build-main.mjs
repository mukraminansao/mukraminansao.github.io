// Builds js/main.js from the files in src/main/, in file-name order.
// Edit the files in src/main/, then run:   node src/build-main.mjs
// Check that js/main.js is up to date:     node src/build-main.mjs --check
//
// The files are pieces of one script that share variables (all inside one function), so each piece
// is not a complete script on its own. Keep the number prefixes: they set the order.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dir = root + 'src/main/';
const out = root + 'js/main.js';

const built = readdirSync(dir)
  .filter((f) => /^\d\d-.+\.js$/.test(f))
  .sort()
  .map((f) => readFileSync(dir + f, 'utf8'))
  .join('');

if (process.argv.includes('--check')) {
  const current = readFileSync(out, 'utf8');
  if (current !== built) {
    console.error('js/main.js is out of date. Run: node src/build-main.mjs');
    process.exit(1);
  }
  console.log('js/main.js is up to date.');
} else {
  writeFileSync(out, built);
  console.log('Built js/main.js from ' + dir.replace(root, '') + ' (' + built.split('\n').length + ' lines).');
}
