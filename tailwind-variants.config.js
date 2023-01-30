/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    {
      pattern: /./,
      variants: ['dark', 'md', 'lg', 'xl'],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
