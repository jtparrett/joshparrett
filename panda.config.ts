import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  outExtension: "js",
  include: [
    "./app/routes/**/*.{ts,tsx,js,jsx}",
    "./app/components/**/*.{ts,tsx,js,jsx}",
  ],
  exclude: [],

  theme: {
    extend: {
      tokens: {
        fonts: {
          body: {
            value: '"Inter", sans-serif',
          },
          mono: {
            value: '"Geist Mono", monospace',
          },
        },
        colors: {
          brand: {
            value: "#000000",
          },
          accent: {
            value: "#6366f1",
          },
          "gray.50": {
            value: "#fafafa",
          },
          "gray.100": {
            value: "#f5f5f5",
          },
          "gray.200": {
            value: "#e5e5e5",
          },
          "gray.300": {
            value: "#d4d4d4",
          },
          "gray.400": {
            value: "#a3a3a3",
          },
          "gray.500": {
            value: "#737373",
          },
          "gray.600": {
            value: "#525252",
          },
          "gray.700": {
            value: "#404040",
          },
          "gray.800": {
            value: "#262626",
          },
          "gray.900": {
            value: "#171717",
          },
          "gray.950": {
            value: "#0a0a0a",
          },
        },
      },
    },
  },

  globalCss: {
    html: {
      backgroundColor: "white",
      color: "gray.900",
      fontFamily: "body",
      lineHeight: 1.6,
      letterSpacing: "-0.02em",
    },
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    body: {
      margin: 0,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
  },

  outdir: "./app/styled-system",
  jsxFramework: "react",
});
