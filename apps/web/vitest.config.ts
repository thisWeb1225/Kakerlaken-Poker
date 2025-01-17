import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ["**/*.test.tsx"],
    globals: true,
    root: "./",
    environment: "jsdom",
    setupFiles: ["./vitest-setup.ts"],
  },
});
