/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#ff0000', // Red
        secondary: '#ffa500', // Orange
        default: '#ffffff', // White
        grayblack: '#222121', // grayblack

      },

    },
  },
  plugins: [],
}