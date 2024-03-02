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
    extend: {
      colors: {
        background: "#fffff4",
        light_text: "#201658",
        dark_text: "#98ABEE",
        button: "#7d9bce",
        
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease 300ms",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
