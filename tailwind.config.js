/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F0F1EE",
        surface: "#EAEBE7",
        card: "#FFFFFF",
        text: {
          DEFAULT: "#111111",
          muted: "#6B6B6B",
          faint: "#9B9B9B",
        },
        border: {
          DEFAULT: "#E5E5E5",
          light: "#F0F0F0",
        },
        dark: {
          DEFAULT: "#111111",
          panel: "rgba(15,15,15,0.85)",
        },
        accent: {
          DEFAULT: "#111111",
          light: "#333333",
        },
      },
      fontFamily: {
        serif: ['"Lora"', '"Georgia"', "serif"],
        sans: ['"Inter"', '"Helvetica Neue"', "sans-serif"],
        display: ['"Instrument Sans"', '"Inter"', "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(3rem, 5.5vw, 5.25rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "h1": ["clamp(2.5rem, 4vw, 4rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "h2": ["clamp(2rem, 3vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "h3": ["clamp(1.5rem, 2vw, 1.875rem)", { lineHeight: "1.15" }],
        "body": ["1.125rem", { lineHeight: "1.6" }],
        "small": ["0.875rem", { lineHeight: "1.5" }],
        "tiny": ["0.8125rem", { lineHeight: "1.4" }],
        "stat": ["clamp(1.75rem, 2.5vw, 2.125rem)", { lineHeight: "1" }],
      },
      spacing: {
        "section": "104px",
        "grid": "28px",
        "container-pad": "85px",
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        "card": "24px",
        "section": "30px",
        "pill": "999px",
        "button": "14px",
        "badge": "12px",
        "icon": "10px",
      },
      maxWidth: {
        "container": "1725px",
        "content": "1370px",
        "nav": "1010px",
        "prose": "600px",
        "card-text": "460px",
      },
      boxShadow: {
        "card": "0 8px 24px rgba(0,0,0,0.08)",
        "card-hover": "0 12px 32px rgba(0,0,0,0.12)",
        "nav": "0 4px 20px rgba(0,0,0,0.06)",
        "glass": "0 20px 40px rgba(0,0,0,0.25)",
        "tool": "0 8px 30px rgba(0,0,0,0.12)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
        fast: "140ms",
        normal: "200ms",
        slow: "350ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};
