/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
