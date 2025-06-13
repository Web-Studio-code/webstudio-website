const { default: PreviousMap_ } = require('postcss/lib/previous-map');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // sve .tsx/.ts/.jsx/.js u tvom app folderu
    "./src/app/**/*.{js,ts,jsx,tsx}",
    // sve u folderu components (ako ga budeš imao)
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
     extend: {
      colors: {
       primary: '#123456',
       accent:  '#1E90FF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      }

  } },
  plugins: []
}
