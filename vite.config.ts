import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.js"),
      name: "MyLib",
      fileName: (format) => `my-lib.${format}.js`,
    },
  },
  plugins: [react()],
});
