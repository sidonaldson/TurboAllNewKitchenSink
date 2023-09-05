import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import filesize from "rollup-plugin-filesize";
import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs({
        include: "node_modules/**",
        requireReturnsDefault: "auto",
      }),
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        plugins: [
          "@babel/plugin-transform-react-jsx",
          "@babel/plugin-transform-runtime",
        ],
      }),
      postcss({
        extract: false,
        modules: true,
        use: ["sass"],
      }),
      filesize({ showGzippedSize: false }),
      typescript(),
    ],
  },
];
