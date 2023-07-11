/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/js/*.js"],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1720px',
    },
    extend: {
    colors: {
      primary: {
        100: '#B3F0E8',
        200: '#8EE5DC',
        300: '#2FC4B1',
        400: '#289C8F',
        500: '#008080',
      },
      secondary: '#00F5A0',
      tertiary: '#00D9F5'
    },
    fontFamily:{
      'poppins': ['Poppins', 'sans-serif']
    }
    },
  },
  plugins: [],
}

