import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      host: "::",
      port: 8081,
    },
    plugins: [
      react(),
      mode === "development" ? componentTagger() : null,
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // ✅ '@' points to src
      },
    },
    // Optional: add build optimizations for production
    build: {
      target: "esnext",
      sourcemap: mode === "development",
    },
  };
});
