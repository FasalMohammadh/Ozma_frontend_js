/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: `'Poppins', sans-serif`,
        mont: `'Montserrat', sans-serif`,
      },
      colors: {
        'custom-accent-color-1': '#00800D',
        'custom-accent-color-2': '#008061',
        'custom-accent-color-3': '#04A86D',
        'custom-accent-color-4': '#03AB5A',
        'custom-input-bg': '#C4C4C44A',
        'custom-input-placeholder': '#00000073',
        'custom-input': '#A3A3A3',
        'custom-form-text': '#6F6F6F',
        'custom-input-otp-bg': '#E5E5E5',
        'custom-input-otp-shadow': '#00000026',
      },
    },
  },
  plugins: [],
};
