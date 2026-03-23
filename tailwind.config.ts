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
        background: "var(--background)",
        foreground: "var(--foreground)",
        charcoal: {
          950: "#0a0a0a",
          900: "#111111",
          800: "#1a1a1a",
          700: "#222222",
          600: "#2d2d2d",
        },
        emerald: {
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
        gold: {
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0d1f14 100%)",
        "green-glow":
          "radial-gradient(ellipse at center, rgba(16,185,129,0.15) 0%, transparent 70%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        emerald: "0 0 30px rgba(16, 185, 129, 0.2)",
        gold: "0 0 30px rgba(245, 158, 11, 0.2)",
        "inner-dark": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.5)",
        glow: "0 0 60px rgba(16, 185, 129, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
