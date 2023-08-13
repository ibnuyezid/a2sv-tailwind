/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],

  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
      },
    },
  },
  plugins: [],
};
