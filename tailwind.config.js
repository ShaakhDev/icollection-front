const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      "xss": "320px",
      "xs": "480px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'dark': '#04031a',
      'accent-color-1': '#3461ff',
      'accent-color-2': '#8454eb',

    }
  },
  plugins: [],
}
