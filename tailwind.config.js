module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
     fontFamily: {
       'amiri': 'Amiri'
      }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('tailwindcss-rtl'),
    ],
}
// https://github.com/psfund/nextjs-tailwind-rtl