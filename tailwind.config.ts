import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        inter: ['Inter', 'Arial', 'sans-serif'],
        greatvibes: ['Great Vibes', 'cursive'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          DEFAULT: '1336px'
        }
      },
      colors: {
        brand: {
          100: "#195A00",
          200: "#AF872F",
          300: "#BC9A6C",
          400: "#EDEAE3",
          500: "#FF9F0D",
          600: "#999966",
        },
        black: {
          100: '#000',
          200: "#1E1E1E",
          300: "#1D1D1D",
          400: "#282828",
          500: "#0D0D0D",
        },
        grey: {
          100: "#333333",
          200: "#4F4F4F",
          300: "#828282",
          400: "#BDBDBD",
          500: "#E0E0E0",
        },
        info: "#2F80ED",
        success: "#27AE60",
        warning: "#E2B93B",
        error: "#EB5757",
      },
      spacing: {
        2: "8px",
        4: "16px",
        6: "24px",
        8: "32px",
        10: "40px",
        14: "56px",
        18: "72px",
        20: "80px",
        24: "96px",
        30: "120px",
      },
    },
  },
  plugins: [],
} satisfies Config;
