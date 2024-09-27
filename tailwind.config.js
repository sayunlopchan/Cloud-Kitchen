/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainText: '',
        secendaryText: '#1F2937',
        colorRed: '#ff0000', // Red
        default: '#FFFFFF', //white
        colorOrange: '#ffa500', // Orange
        grayblack: '#222121', // grayblack
        clay: '#F0F2FF', // clay
      },
    },

  },
  plugins: [],
}