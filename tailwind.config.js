/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#38b000",
        "secondary": "#008000"
      },
      fontFamily: {
          'logo': 'Bebas Neue'
      }
    }
  },
  plugins: [],
}
 