import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  format: ["cjs"],
  dts: true,
  minify: true,
  clean: true,
  external: ["react"],
  ...options,
}));
