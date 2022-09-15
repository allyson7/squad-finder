/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    '*.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background.png')"
      }
    },
  },
  plugins: [],
}
