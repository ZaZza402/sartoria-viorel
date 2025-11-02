/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Color Palette - Navy/Cream/Gold
        brand: {
          primary: "#d4af37", // Luxury Gold
          "primary-hover": "#b8935f",
          "primary-light": "#e6c766",
          base: "#fdfbf7", // Warm Cream
          accent: "#b8935f", // Muted Gold
          "accent-dark": "#9a7a4c",
          text: "#0f1419", // Deep Navy
          "text-light": "#1a2332",
        },
        // Keep existing for backward compatibility
        primary: {
          DEFAULT: "#d4af37",
          50: "#fdfbf7",
          100: "#f5f1e8",
          200: "#e6c766",
          300: "#d4af37",
          400: "#b8935f",
          500: "#d4af37",
          600: "#b8935f",
          700: "#9a7a4c",
          800: "#7d6139",
          900: "#5f4827",
        },
        secondary: {
          DEFAULT: "#b8935f",
          50: "#fdfbf7",
          100: "#f5f1e8",
          200: "#e6c766",
          300: "#d4af37",
          400: "#b8935f",
          500: "#b8935f",
          600: "#9a7a4c",
          700: "#7d6139",
          800: "#5f4827",
          900: "#423315",
        },
      },
      fontFamily: {
        sans: ["Libre Baskerville", "Georgia", "serif"],
        serif: ["Cormorant", "Georgia", "serif"],
        display: ["Cormorant", "Georgia", "serif"],
        script: ["Great Vibes", "cursive"],
      },
      backgroundImage: {
        "subtle-gradient": "linear-gradient(180deg, #f5f1e8, #fdfbf7)",
      },
      backgroundColor: {
        base: "#fdfbf7",
      },
      textColor: {
        base: "#fdfbf7",
        primary: "#d4af37",
        accent: "#b8935f",
        default: "#0f1419",
      },
    },
  },
  plugins: [],
};
