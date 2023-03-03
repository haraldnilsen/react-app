/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "public/index.html"
  ],
  darkMode: 'class',
  theme: {
    screens: {
      "md": "810px"
    },
    extend: {
      colors: {
        "primary": "#38b000",
        "secondary": "#008000",
        "darkGreen": "#003D1D",
        "fontBlack": "#333244"
      },
      fontFamily: {
          'logo': 'Bebas Neue'
      }
    }
  },
  plugins: []
}