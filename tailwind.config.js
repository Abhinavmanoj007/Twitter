/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      poppin: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },

    extend: {
      colors: {
        blue: "#1DA1F2",
        black: "#14171A",
        darkGray: "#657786",
        lightGray: "#AAB8C2",
        xlightGray: "#E1E8ED",
        xxlightGray: "#F5F8FA",
      },
    },
  },
  plugins: [],
};
