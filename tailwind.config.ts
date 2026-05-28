import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        card: "#111111",
        "card-hover": "#161616",
        border: "rgba(255, 255, 255, 0.06)",
        accent: {
          DEFAULT: "#f59e0b", // Amber
          glow: "rgba(245, 158, 11, 0.15)",
          border: "rgba(245, 158, 11, 0.25)",
        },
      },
      fontFamily: {
        comfortaa: ["var(--font-comfortaa)", "Comfortaa", "sans-serif"],
        sans: ["var(--font-sans)", "DM Sans", "sans-serif"],
        mono: ["var(--font-mono)", "DM Mono", "monospace"],
      },
      animation: {
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        float: "floatIcon var(--dur, 5s) ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
