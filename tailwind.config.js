// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(card|navbar|skeleton|ripple).js"
],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};