/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "screen": "#F8F8F8",
        "d-blue": "#070A47"
    },

  },
  plugins: [],
}}
