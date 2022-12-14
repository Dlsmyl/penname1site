/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: "'Abril Fatface', serif",
      },
    },
  },
  daisyui: {
    themes: ['pastel'],
    darkTheme: 'pastel',
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
