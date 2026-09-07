// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Configure TanStack Start for SPA/static output on Netlify.
// We enable SPA mode and instruct the prerender to emit `index.html` so
// a static host can serve the shell. We also tweak Vite's rollup options
// to keep the client bundle consolidated (single JS + single CSS file).
export default defineConfig({
  vite: {
    // Keep Vite defaults for CSS splitting and chunking so Start's manifest
    // generation works correctly. Avoid forcing a single bundle here.
    build: {},
  },
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        // Emit shell at /index.html so Netlify can serve it directly.
        outputPath: "index.html",
      },
    },
    // Force server build entry to a named file so the preview server can import it as `server.js`.
    server: { entry: "./src/server.ts" },
  },
});
