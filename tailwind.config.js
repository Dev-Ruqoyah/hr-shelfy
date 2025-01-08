/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundColor:{
        primary:"#f5f5DC",
        supporting: "#4B382A",
        secondary: "#DAA520",
        ssecondary:"#708090"
      },
      colors:{
        primary: "#f5f5DC",
        supporting: "#4B382A",
         secondary: "#DAA520",
        ssecondary:"#708090"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

