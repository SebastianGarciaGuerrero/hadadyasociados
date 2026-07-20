/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Antic Slab"', "Georgia", "serif"],
        sans: ['Alef', "system-ui", "sans-serif"],
      },
      colors: {
        brand: "#781010",
        accent: "#f05858",
        ink: "#333333",
        subtle: "#747474",
      },
    },
  },
  plugins: [],
};
