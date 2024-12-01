import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sourGummy: ["var(--font-sour-gummy)", "serif"],
        acme: ["var(--font-acme)", "serif"],
      },
    },
  },
  plugins: [],
}
export default config