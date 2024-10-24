
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainText: '',
        secendaryText: '#1F2937',
        colorRed: '#ff0000', // Red
        default: '#FFFFFF', // White
        colorOrange: '#ffa500', // Orange
        grayblack: '#222121', // Grayblack
        clay: '#F0F2FF', // Clay
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.2)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        jumpscare: {
          '0%': {
            opacity: '1',
            transform: 'translateY(30px) translateX(0)',
          },
          '50%': {
            opacity: '0.7',
            transform: 'translateY(20px) scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-35px) translateX(20px) scale(0.5)',
          },
        },
        splash: {
          '0%': {
            opacity: '1',
            transform: 'scale(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(4)',
          },
        },
        popup: {
          '0%': {
            opacity: '0',
            transform: 'translateY(0) translateX(0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(20px) translateX(5px)'
          },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
        reverse: {
          '0%': {
            transform: 'translateY(10px) translateX(10px) scale(0.5)',
          },
          '100%': {
            transform: 'translateY(0) translateX(0) scale(1)',
          },
        },
      },
      animation: {
        pop: 'pop 0.5s ease-in-out',
        jumpscare: 'jumpscare 0.7s ease-out',
        splash: 'splash 0.6s ease-out',
        popup: 'popup 1s ease-in-out infinite',
        shake: 'shake 0.2s ease-in-out',
        reverse: 'reverse 0.4s ease-in infinite',
      },
    },
  },
  plugins: [],
};
