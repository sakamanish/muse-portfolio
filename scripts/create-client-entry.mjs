import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const clientDirectory = path.resolve("dist/client");
const assetsDirectory = path.join(clientDirectory, "assets");
const assets = await readdir(assetsDirectory);
const entryFile = assets.find((fileName) => /^index-[^/]+\.js$/.test(fileName));
const stylesheet = assets.find((fileName) => /^styles-[^/]+\.css$/.test(fileName));

if (!entryFile) {
  throw new Error("Could not find the client entry bundle in dist/client/assets");
}

const stylesheetTag = stylesheet
  ? `<link rel="stylesheet" href="/assets/${stylesheet}">`
  : "";

await writeFile(
  path.join(clientDirectory, "index.html"),
  `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>MUSE - Festive Edit</title>${stylesheetTag}</head><body><div id="root"></div><script type="module" src="/assets/${entryFile}"></script></body></html>\n`,
);

console.log(`Created dist/client/index.html using ${entryFile}`);
