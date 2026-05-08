import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0A", // The deep brand black
        gold: "#D4AF37",     // Classic gold accent
        ivory: "#F9F9F7",    // Soft white for footer text and sections
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.3em",
        "luxury-lg": "0.5em",
      },
      keyframes: {
        "subtle-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "subtle-zoom": "subtle-zoom 20s infinite alternate ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
