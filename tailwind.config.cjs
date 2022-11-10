/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "screen": "#FFFFFF",
        "d-blue": "#070A47"
    },

  },
  plugins: [],
}}
