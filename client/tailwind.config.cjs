/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { 
      colors: {
      'main-color': '#4A7361',
      'secondary-color': '#5e927b',
      'light-color': '#F3F5F9',
      'dark-color': '#040C16',
    }},
  },
  plugins: [],
}
