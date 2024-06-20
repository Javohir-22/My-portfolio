/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      keyframes: {
        up: {
          '0%': { transform: 'translateY(-100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        down: {
          '0%': { transform: 'translateY(80px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        left: {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        right: {
          '0%': { transform: 'translateX(100px)', opacity: 0 },
          
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeUp: {
          '0%': { transform: 'translateY(-100px)', opacity: 0 },
          '50%': { transform: 'translateY(-100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeBottom: {
          '0%': { transform: 'translateY(40px)', opacity: 0 },
          '50%': { transform: 'translateY(40px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeRight: {
          '0%': { transform: 'translateX(100px)', opacity: 0 },
          '50%': { transform: 'translateX(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        up:'up 1.2s ease-in-out',
        down:'down 1.2s ease-in-out',
        left:'left 1.2s ease-in-out',
        right:'right 1.2s ease-in-out',
        fadeUp: 'fadeUp 1.4s ease-in-out',
        fadeBottom: 'fadeBottom 3s ease-in-out',
        fadeRight: 'fadeRight 2.4s ease-in-out',
        fadeLeft: 'fadeLeft 0.8s ease-in-out ',
      },
    },
  },
  plugins: [],
}