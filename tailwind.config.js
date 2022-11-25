/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        signika: ["Signika Negative"],
        red: ["Red Hat Display"],
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
