import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        arena: {
          50: "#fef7ed",
          100: "#fdeace",
          200: "#fbcf9b",
          300: "#f8b868",
          400: "#f59a35",
          500: "#e68214",
          600: "#cc6610",
          700: "#a54d0d",
          800: "#7f3b0a",
          900: "#5a2907",
        },
        spice: {
          50: "#fef5e7",
          100: "#fde6c7",
          200: "#f9cd83",
          300: "#f4ad3f",
          400: "#efa824",
          500: "#e79510",
          600: "#b5740c",
          700: "#835609",
          800: "#513806",
          900: "#1f1403",
        },
        midnight: {
          50: "#e8eaf6",
          100: "#c5cae9",
          200: "#9fa8da",
          300: "#7986cb",
          400: "#5c6bc0",
          500: "#3f51b5",
          600: "#303f9f",
          700: "#283593",
          800: "#1a237e",
          900: "#0d1142",
        },
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        body: ["Rajdhani", "sans-serif"],
      },
      backgroundImage: {
        "sand-gradient": "linear-gradient(to bottom, #0d1142 0%, #1a237e 50%, #0d1142 100%)",
      },
    },
  },
  plugins: [],
};
export default config;