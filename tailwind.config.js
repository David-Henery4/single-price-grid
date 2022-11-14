/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./build/*.html"],
  theme: {
    colors: {
      cyan: "hsl(179, 62%, 43%)",
      brightyellow: "hsl(71, 73%, 54%)",
      lightgray: "hsl(204, 43%, 93%)",
      grayishblue: "hsl(218, 22%, 67%)",
      white: colors.white,
      red: colors.red,
    },
    btnPx: "102px",
    extend: {
      screens: {
        mob: "20.62em",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      spacing: {
        25: "102px",
      },
      maxWidth: {
        635: "635px",
      },
      gridTemplateRows: {
      layout: "216px 259px",
      },
    },
  },
  plugins: [],
};
