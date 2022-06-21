const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "xss": "320px",
      "xs": "480px",
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
