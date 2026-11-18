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
      keyframes: {
        // Carrusel continuo de logos de clientes (la lista va duplicada)
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
