/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    {
      pattern: /./,
      variants: ['dark', 'hover', 'md', 'lg', 'xl'],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
