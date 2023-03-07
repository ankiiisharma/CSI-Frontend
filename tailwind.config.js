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
        primary: {
          shades2: "#C5A318",
        },
        secondary: {
          shades1: "#efefef",
          shades2: "#D9D9D9",
          from: "#E0C659",
          to: "#C5A318",
        },
        textColor: {
          header: "#263238",
          subheader: "#575757",
        },
        footerNote: {
          from: "#0C3DA5",
          to: "#092255",
        },
      },
      boxShadow: {
        teamCard: "0 18px 66px 0 rgba(152, 186, 197, 0.27)",
      },
    },
  },
  plugins: [],
};
