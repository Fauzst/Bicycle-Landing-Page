/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '360px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primaryBg: "#FFFFFF",
        primaryText: "#000000",
        primarySide: "#9ca3af",
      },
      keyframes: {
        onespin: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(180deg)'}
        },
        backspin: {
          '0%': {transform: 'rotate(180deg)'},
          '100%': {transform: 'rotate(0deg)'}
        }
      },
      animation: {
        onespinonly: 'onespin 0.5s ease-in-out',
        backspinonly: 'backspin 0.5s ease-in-out'
      }

    },
  },
  plugins: [],
}

