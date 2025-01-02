/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary" : "#5f6FFF"
      },
      gridTemplateColumns : {
        "3col" : "3fr 1fr 1fr",
        "2col" : "150px 500px",
        "2cols": "150px 100px",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
