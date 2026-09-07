// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Configure TanStack Start for Vercel's SSR build output.
export default defineConfig({
  tanstackStart: {
    spa: {
      // Vercel serves the compiled SSR handler; avoid the SPA preview-prerender
      // path, which expects a non-hashed server.js entry that this plugin version
      // does not emit.
      enabled: false,
    },
    // Keep the server entry explicit for the generated SSR bundle.
    server: { entry: "./src/server.ts" },
  },
});
