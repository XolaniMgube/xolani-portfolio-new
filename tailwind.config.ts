import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:        "#10141C",
        "bg-card": "#161C28",
        "bg-line": "#1E2637",
        dim:       "#3D4F66",
        muted:     "#6B7FA0",
        body:      "#9BAEC8",
        bright:    "#CDD9EB",
        snow:      "#EBF2FF",
        blue:      "#4D9EFF",
        "blue-bg": "#0E2040",
        teal:      "#2DD4BF",
        "teal-bg": "#0A2922",
        amber:     "#F5A623",
      },
      fontFamily: {
        sans:  ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "ui-serif", "serif"],
        mono:  ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "960px",
      },
    },
  },
  plugins: [],
};

export default config;
