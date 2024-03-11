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
      }
    },
  },
  plugins: [],
}

