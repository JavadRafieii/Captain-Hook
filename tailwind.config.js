/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
      }
    },
    extend: {
      colors: {
        'dark-navy': '#242A3A',
        'steel-gray': '#3B3F4E',
        'sunset-yellow': '#F6B12B',
        'smoky-gray': '#3a3a3a',
        'storm-gray': '#42485C',
      },
    },
  },
  plugins: [],
}