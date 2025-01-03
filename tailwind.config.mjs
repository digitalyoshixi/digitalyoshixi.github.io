/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.js"

  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily : {
        acme: ['var(--font-acme)'],
        sourgummy: ['var(--font-sourgummy)']
      },
      backgroundImage : {
        'aiforest' : "url('/images/aiforest.jpeg')",
      },
      typography: {
        DEFAULT: {
          css: {
            'padding': '0',
            'margin': '0',
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
