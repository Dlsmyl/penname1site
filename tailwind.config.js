/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './slices/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [require('daisyui')],
}
