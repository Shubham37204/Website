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
        bg: "var(--bg)",
        card: "var(--bg-card)",
        "card-hover": "var(--bg-card-hover)",
        border: "var(--border)",
        accent: {
          DEFAULT: "var(--accent)",
          muted: "var(--accent-muted)",
          glow: "var(--accent-glow)",
          border: "var(--accent-border)",
        },
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
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
