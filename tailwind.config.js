/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#C11F4D",
        secondaryColor: "#222C3A"
      }
    },
  },
  plugins: [],
}

