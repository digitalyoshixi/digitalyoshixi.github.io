/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sourGummy: ["Sour Gummy", "sans-serif"],
        acme: ["Acme", "sans-serif"],
      },
    },
  },
  plugins: [],
}
