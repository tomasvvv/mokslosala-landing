/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./scripts/*.{html,js}"],
  theme: {
    extend: {
      transparent: "transparent",
      current: "currentColor",
      "island-blue": "#282736",
      "island-red": "#55262A",
      "island-green": "#3E3823",
      "island-gray": "#5C5C5C",
      "middle-blue": "#0036C1",
      "middle-red": "#B61D17",
      "middle-green": "#5A7C17",
      "middle-gray": "#B7B7B7",
      "science-blue": "#7098FF",
      "science-red": "#FE635E",
      "science-green": "#B8F640",
      "science-gray": "#D3D3D3",
    },
  },
  plugins: [],
};
