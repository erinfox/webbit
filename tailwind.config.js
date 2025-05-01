/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.erb'
  ],
  safelist: [
    'btn',
    'btn-sm',
    'btn-outline',
    'btn-indigo',
    'btn-green',
    'btn-white'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
