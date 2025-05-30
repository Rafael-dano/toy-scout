/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#F59E0B", // fun orange/yellow
        dark: "#1F2937",
      },
    },
  },
  plugins: [],
}