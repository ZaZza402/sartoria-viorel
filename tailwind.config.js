/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Color Palette
        brand: {
          primary: "#014421",      // Deep Forest Green
          "primary-hover": "#012f17",
          "primary-light": "#015829",
          base: "#EFEFEF",         // Light Cool Gray
          accent: "#BDBDBD",       // Silver
          "accent-dark": "#9e9e9e",
          text: "#333333",         // Charcoal
          "text-light": "#666666",
        },
        // Keep existing for backward compatibility
        primary: {
          DEFAULT: "#014421",
          50: "#e6f4ed",
          100: "#cce9db",
          200: "#99d3b7",
          300: "#66bd93",
          400: "#33a76f",
          500: "#014421",
          600: "#01391b",
          700: "#012f17",
          800: "#012412",
          900: "#00190d",
        },
        secondary: {
          DEFAULT: "#BDBDBD",
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#d4d4d4",
          500: "#BDBDBD",
          600: "#9e9e9e",
          700: "#757575",
          800: "#616161",
          900: "#424242",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      backgroundColor: {
        base: "#EFEFEF",
      },
      textColor: {
        base: "#EFEFEF",
        primary: "#014421",
        accent: "#BDBDBD",
        default: "#333333",
      },
    },
  },
  plugins: [],
};
