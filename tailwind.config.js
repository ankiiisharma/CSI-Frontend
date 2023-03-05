/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        header: "url('./images/common/header-bg.svg')",
        footer: "url('./images/common/footer-bg.svg')",
      },
      fontSize: {
        chip: "10px",
      },
      colors: {
        secondary: {
          shades1: "#efefef",
        },
      },
    },
  },
  plugins: [],
};
