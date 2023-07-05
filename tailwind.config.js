const defaultTheme = require('tailwindcss/defaulttheme');

module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{html,js}"
  ],
  theme: {
    screens: {
      xs: '320px',
      '2xs': '480px',
      '2k': '2048px',
      '2k+' : '2560px',
      '4k':'4096px',
      ...defaultTheme.screens
    },
    extend: {
      transitionProperty: {
        height: 'height',
        width: 'width'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      
      },
      borderRadius: {
        10: '10px'
      },
      spacing: {
        128: '32rem'
      }
    }
  },
  plugins: []
};
