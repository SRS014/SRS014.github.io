// Checks every internal link and asset reference in the built site (dist/). No dependencies.
// Usage: npm run build && npm run check:links
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (extname(p) === ".html") files.push(p);
  }
})(DIST);

const broken = [];
let checked = 0;
for (const file of files) {
  const html = readFileSync(file, "utf8");
  for (const m of html.matchAll(/(?:href|src|srcset)="([^"]+)"/g)) {
    for (const part of m[1].split(",")) {
      const ref = part.trim().split(/\s+/)[0];
      if (!ref || /^(https?:|mailto:|#|data:)/.test(ref)) continue;
      const path = ref.split("#")[0].split("?")[0];
      if (!path.startsWith("/")) continue;
      checked++;
      const target = join(DIST, decodeURIComponent(path));
      const ok = existsSync(target) && (statSync(target).isFile() || existsSync(join(target, "index.html")));
      if (!ok) broken.push(`${file.replace(DIST, "")}: ${ref}`);
    }
  }
}
console.log(`${files.length} pages, ${checked} internal references checked`);
if (broken.length) {
  console.error("Broken:\n" + broken.join("\n"));
  process.exit(1);
}
console.log("No broken internal links.");
