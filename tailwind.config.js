/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./build/*.html"],
  theme: {
    colors: {
      cyan: "hsl(179, 62%, 43%)",
      brightyellow: "hsl(71, 73%, 54%)",
      lightgray: "hsl(204, 43%, 93%)",
      grayishblue: "hsl(218, 22%, 67%)",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
