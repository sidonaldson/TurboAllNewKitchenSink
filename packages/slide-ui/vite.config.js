import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "slide-ui",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom", "framer-motion"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM",
          "framer-motion": "FramerMotion",
        },
      },
    },
  },
  plugins: [dts()],
});
