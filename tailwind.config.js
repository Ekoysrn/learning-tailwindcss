/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      roboto:["Roboto","sans-serif"],
      inter:["inter","sans-serif"]
    }
  },
  plugins: [],
}

