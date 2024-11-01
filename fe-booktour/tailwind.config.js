/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '102': '24rem',
        '122': '30rem',
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

