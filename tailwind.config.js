/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FFC700',
        'secondary': '#353535',
      },
      height: {
        '80': '40rem'
      }
    },
  },
  plugins: [],
}

