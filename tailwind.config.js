const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: colors.slate,
      secondary: colors.fuchsia,
      royalblue: {
        dark: '#02003d',
      },
      gray: {
        400: '#a8a8a8',
      },
      pink: {
        700: '#f71963',
      },
      white: colors.white,
      whitesmoke: '#f0f0f0',
      benefitsgray: '#6b7381',
      honeydew: {
        darkest: '#AFD5AF',
        dark: '#BCDCBC',
        DEFAULT: '#CAE3CA',
        light: '#D7EAD7',
        lightest: '#E0EFE0', // original, other shades generated at https://coolors.co/
      },
    },
  },
  plugins: [],
}
