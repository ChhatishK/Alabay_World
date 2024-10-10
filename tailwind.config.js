/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow : {
        '2xl' : `6.62px 20.12px 35.77px 0px #A87D29`
      }
    },
  },
  plugins: [],
}

