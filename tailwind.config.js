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
        background: "#EEF5FF",
        heading: "#453C67",
        button: "#D56073",
        block: "#78C1F3",
        sub_heading: "#0E2954",
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
