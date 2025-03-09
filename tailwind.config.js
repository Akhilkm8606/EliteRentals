/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Scan all JSX/TSX files
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        gold: "#F2C83B",  // ✅ Now Tailwind recognizes "text-gold"
        white: "#FFFFFF",
        darkGray: "#1C1C1C",
      },
      fontFamily: {
        premium: ["Playfair Display", "serif"],
        modern: ["Montserrat", "sans-serif"],
        bodoni: ['Bodoni', 'serif'],
      },
      
      // screens: {
      //   'sm': '640px',
      //   'md': '768px',
      //   'lg': '1024px',
      //   'xl': '1280px',
      //   '2xl': '1536px',
      // },
      
    },
  },
  plugins: [],
};
