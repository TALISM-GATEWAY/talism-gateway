import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(process.cwd(), "dist");
const index = resolve(dist, "index.html");
const fallback = resolve(dist, "404.html");

if (!existsSync(index)) {
  throw new Error(`Build output not found: ${index}`);
}

copyFileSync(index, fallback);
console.log("Created GitHub Pages SPA fallback: dist/404.html");
