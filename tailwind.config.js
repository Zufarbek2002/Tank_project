/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': "#181818",
        'main-color': "#FF9549",
      },
    },
  },
  plugins: [],
}
