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
        primary: "#2D7D7D",
        secondary: "#C8A96E",
        background: "#F8F9FA",
        accent: "#E8F4F4",
        "text-primary": "#1A1A2E",
        "text-secondary": "#4A4A6A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(45, 125, 125, 0.08)",
        "card-hover": "0 8px 32px rgba(45, 125, 125, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
