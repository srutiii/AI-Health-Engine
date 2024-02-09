/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      feedback: ["Grape Nuts", "cursive"],
      nunito: ["Nunito Sans", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
      playfair: ["Playfair Display", "serif"],
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
