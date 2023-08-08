const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: [
        '12px',
        {
          lineHeight: '150%',
          letterSpacing: '-2%',
        },
      ],
      sm: [
        '14px',
        {
          lineHeight: '150%',
          letterSpacing: '-2%',
        },
      ],
      base: [
        '16px',
        {
          lineHeight: '150%',
          letterSpacing: '-2%',
        },
      ],
      md: [
        '18px',
        {
          lineHeight: '150%',
          letterSpacing: '-2%',
        },
      ],
      lg: [
        '20px',
        {
          lineHeight: '120%',
          letterSpacing: '-2%',
        },
      ],
      xl: [
        '24px',
        {
          lineHeight: '120%',
          letterSpacing: '-2%',
        },
      ],
      '3xl': [
        '32px',
        {
          lineHeight: '110%',
          letterSpacing: '-2%',
        },
      ],
      '4xl': [
        '40px',
        {
          lineHeight: '120%',
          letterSpacing: '-2%',
        },
      ],
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: {
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: '-2%',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
