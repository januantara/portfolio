/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        'blues-dark': '#445EE5',
      },
      transitionDuration: {
        '600': '600ms',
      },
      backgroundOpacity: {
        '7': '0.07',
      }
    },
  },
  plugins: [],
}

