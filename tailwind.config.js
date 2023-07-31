const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      maxWidth: {
        '8xl': '88rem',
      },
      colors: {
        primary: '#1C00A9',
        darkprimary: '#2C80FF',
        primaryhover: '#190580',
        lightbluedarker: '#EBECFF',
        disabledgray: '#7D7F8A',
        lightblue: '#F5F8FC',
        dark: '#242534',
        secondary: '#F1F4F9',
        darkcontent: '#2A2D3E',
        lightgray: '#A3A3A3',
        normalgray: '#6A6A6A',
        lightergray: '#D4D4D4',
        darkbg: '#242534',
        info: '#ADDDEC',
        success: '#D4EADD',
        warning: '#FFD9BE',
        danger: '#FFC1CE',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}