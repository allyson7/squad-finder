/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    '*.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 20.57%)'
      }
    },
  },
  plugins: [],
}
