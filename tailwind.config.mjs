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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              marginTop: '0em',
              marginBottom: '0.0em',
            },
            p: {
              marginTop: '0.0em',
              marginBottom: '0.0em',
            },
            h1 : {
              fontSize: '3rem',
              color: theme('colors.green.500'),
            }
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
