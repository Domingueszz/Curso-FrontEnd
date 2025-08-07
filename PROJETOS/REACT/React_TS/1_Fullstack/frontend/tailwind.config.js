/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",      // azul escuro
        accent: "#22c55e",       // verde musgo (tom mais vibrante)
        light: "#f9fafb",        // branco gelo
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
