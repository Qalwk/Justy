/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title:["Unbounded", "sans-serif"],
      }
    },
    typography: {
      DEFAULT: {
        css: {
          // ...
          'font-feature-settings': "'tnum' on, 'lnum' on"
        },
      },
    },
  },
  plugins: [],
}

