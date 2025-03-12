/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' }, // Styles apply to screens that are 1535px and smaller
      xl: { max: '1279px' }, // Styles apply to screens that are 1279px and smaller
      // lg: { max: "1023px" }, // Styles apply to screens that are 1023px and smaller
      md: { max: '1023px' }, // Styles apply to screens that are 767px and smaller
      sm: { max: '600px' }, // Styles apply to screens that are 600px and smaller
    },
    extend: {},
  },
  plugins: [],
}
