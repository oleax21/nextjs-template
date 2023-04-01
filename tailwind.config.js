/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '320px',
      tablet: '481px',
      laptop: '769px',
      desktop: '1025px',
      monitor: '1201px',
      bigmonitor: '1401px',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
