/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
       backgroundImage: {
      'form_image': "url('./assets/bg.jpg')",
    },
    },
    fontFamily: {
      'monrope': ['Manrope', 'sans-serif'],
    },
    colors: {
      'primary_btn': '#ABEF5F',
      'black': '#000',
      'white': '#fff',
      'background': '#F4F4F4',
      'pink': '#E7C1D3',
      'amber': '#EFDA6E',
      'emerald': '#A4DAC3',
      'blue': '#77AAEA',
      'border_color': '#E9E9E9',
    },
   

  },
  plugins: [
    require('daisyui'),
  ],
}

