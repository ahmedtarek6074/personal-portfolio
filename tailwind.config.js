/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,ts,jsx,tsx}",
  "./componants/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  }, 
  plugins: [require('tailwind-scrollbar'),],
}
