/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],

  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat Alternates', 'sans-serif'],
        inter: ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },

  plugins: [require('daisyui')],

  daisyui: {
    themes: [],
  },
};
