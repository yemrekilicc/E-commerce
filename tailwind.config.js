/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'nunito-sans': ['Nunito Sans', 'sans'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
