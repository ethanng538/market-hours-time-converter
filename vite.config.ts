import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Vite Configuration
 * Integrates Tailwind CSS v4.1 and Vitest for FAST testing principles.
 */
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Modern v4.x plugin architecture
  ],
  test: {
    globals: true,
    environment: "happy-dom", // Performance-focused DOM simulation for FAST tests
    setupFiles: "./src/test/setup.ts",
    css: true, // Enables CSS processing in tests for layout/visibility assertions
  },
});