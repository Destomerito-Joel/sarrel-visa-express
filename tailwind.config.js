/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'base-color': '#FE3E00',
        'color-one': '#E6F2FE',
        'color-two': '#FF9266',
        'bg-color': '#00000080',
        'q-color': '#6800EC',
      },
      height: {
        'h-one': '400px',
        'h-two': '500px',
        'h-three': '600px',
        'h-four': '700px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      opacity: {
        '0': '0',
        '100': '1',
      },

      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },

        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },

        'open-page': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'open-page': 'open-menu 0.8s ease-in forwards',
        spin: 'spin 1s linear infinite',
        'spin-slow': 'spin 5m linear infinite',
      },
    },
  },
  plugins: [],
}
