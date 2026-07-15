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
        display: ["var(--font-display)", "var(--font-comfortaa)", "Space Grotesk", "sans-serif"],
        comfortaa: ["var(--font-display)", "var(--font-comfortaa)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-sans)", "DM Sans", "sans-serif"],
        mono: ["var(--font-mono)", "DM Mono", "monospace"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        DEFAULT: "12px",
        lg: "16px",
        xl: "20px",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        nav: "var(--shadow-nav)",
      },
      transitionDuration: {
        150: "150ms",
        250: "250ms",
      },
      animation: {
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        float: "floatIcon var(--dur, 5s) ease-in-out infinite",
        "fade-in": "fadeIn 0.2s ease-out forwards",
        "slide-down": "slideDown 0.25s ease-out forwards",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.6" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
