/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        page : {
          "header" : "#434a5c", 
          "principal-fond" : "ffffff",
          "principal-text" : "#e21d48",
          "secondary-color" : "#000000",
          "text-gateway" : "#fec400"
        }
      }
    },
  },
  plugins: [],
}

