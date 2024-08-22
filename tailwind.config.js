/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {},
    fontFamily: {
    'monrope': ['Manrope', 'sans-serif'],
    },
    colors: {
      'primary_btn': '#ABEF5F',
      'black' : '#000',
      'white' : '#fff',
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

