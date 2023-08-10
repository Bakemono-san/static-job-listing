/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
      backgroungImage:{
        'desktop':"url('public/images/bg-header-dektop.svg')",
        'mobile':"url('public/images/bg-header-mobile.svg')",
      }
    ,
    colors:{
      'header-color':'hsl(180, 29%, 50%)',
      'container-background':'hsl(180, 52%, 96%)',
      'filter':'hsl(180, 31%, 95%)',
      'detail':'hsl(180, 8%, 52%)',
      'feature-background':'hsl(180, 14%, 20%)',
      'white': colors.white,
    },
    fontFamily: {
      'sans': ['League Spartan', 'sans-serif'],
      'serif': ['sans-serif', ],},
    extend: {
      backgroungImage:{
        'header-desktop':'url("images/bg-header-desktop.svg")',
        'header-mobile':'url("images/bg-header-mobile")',
      }
    },
  },
  plugins: [],
}