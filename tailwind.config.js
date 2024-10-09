/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffce16',
        'primary-dark': '#c69f0b',
        'paragraph-gray': '#444',
        'dark-gray': '#222',
        'light-gray': '#e6e6e6',
        'white-50': '#ffffff80'
      }
    },
  },
  plugins: [],
}

