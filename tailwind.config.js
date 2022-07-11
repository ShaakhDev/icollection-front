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
      'secondary-color': '#9a99ad',
      'gray': {
        '100': '#f3f4f6',
        '200': '#e5e7eb',
        '300': '#d1d5db',
        '400': '#9ca3af',
      },
      'dark-lighter': '#1e1c45',
      'red': '#ff0000',
      'green': '#00ff00',
    }
  },
  plugins: [],
}
