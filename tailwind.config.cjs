/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'white':'#FFFFFF',
      'brand':'#BF7506',
      'brandLight':'#DD9C3C',
      'black':'#211B12',
    },
    fontFamily: {
      'arial': 'Arial',
    },
  },
  plugins: [],
}
