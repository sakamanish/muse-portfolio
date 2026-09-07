import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { build } from "esbuild";

const clientDirectory = path.resolve("dist/client");
const assetsDirectory = path.join(clientDirectory, "assets");
const assets = await readdir(assetsDirectory);
const stylesheet = assets.find((fileName) => /^styles-[^/]+\.css$/.test(fileName));

await build({
  entryPoints: ["src/static-client.tsx"],
  outfile: path.join(assetsDirectory, "muse-app.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  jsx: "automatic",
  tsconfig: "tsconfig.json",
  alias: { "@": path.resolve("src") },
  plugins: [
    {
      name: "ignore-css-url-imports",
      setup(buildContext) {
        buildContext.onResolve({ filter: /\.css\?url$/ }, (args) => ({
          path: args.path,
          namespace: "css-url",
        }));
        buildContext.onLoad({ filter: /.*/, namespace: "css-url" }, () => ({
          contents: "export default '';",
          loader: "js",
        }));
      },
    },
  ],
});

const stylesheetTag = stylesheet
  ? `<link rel="stylesheet" href="/assets/${stylesheet}">`
  : "";

await writeFile(
  path.join(clientDirectory, "index.html"),
  `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>MUSE - Festive Edit</title>${stylesheetTag}</head><body><div id="root"></div><script type="module" src="/assets/muse-app.js"></script></body></html>\n`,
);

console.log("Created dist/client/index.html using the static React client entry");
