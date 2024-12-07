/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fondo': '#FDF6C8', 
        'primario': '#4eb653'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        chewy: ['"Chewy"', 'cursive'],
        itim: ['Itim', 'cursive'],
        amatic: ['"Amatic SC"', 'cursive'],
        titan: ['"Titan One"', 'cursive'],
        nerko: ['"Nerko One"', 'cursive'],
      },
    },
  },
  plugins: [],
}