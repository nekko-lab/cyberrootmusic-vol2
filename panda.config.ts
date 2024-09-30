import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          bgPrimary: { value: "#101010", description: "black" },
          primary: { value: "#FFFDEB", description: "white" },
        },
        fonts: {
          primary: { value: "'IBM Plex Mono', sans-serif" },
          barcode: { value: "'Libre Barcode 39 Extended'" },
          heading_en: { value: "Inter" },
          heading_ja: { value: "'Zen Kaku Gothic New'" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "src/styled-system",
});
