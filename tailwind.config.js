/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Bruno Ace SC, cursive"],
        Comfortaa: ["Comfortaa, cursive"]
      },
      colors: {
        darkwhite: ["#f1f1f1"],
        ligthblack: ["#353535"],
      },
      letterSpacing: {
        new: "4px",
      },
      fontSize: {
        s: "12px",
        new: "14px",
      },
      width: {
        half: "80%"
      }, 
      height: {
        half: "80%"
      }
    },
  },
  plugins: [],
}