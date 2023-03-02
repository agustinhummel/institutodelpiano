/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./index.html",
  "./src/**/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { 
      colors: {
      'main-color': '#7dd3fc',
      'options-color': '#d09a30',
      'option1-color': '#001099',
      'secondary-color': '#fcd34d',
      'light-color': '#F3F5F9',
      'dark-color': '#040C16',
    },
    fontFamily: {
      'serif': 'Noto Serif'
    }
  },
  },
  plugins: [],
}
