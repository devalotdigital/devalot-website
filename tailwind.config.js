/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        perso: ["Poppins"],
      },
      colors: {
        primary: "#ff5959",
        secondary: "#456f82",
      },
      backgroundImage: {
        welcome: "url(/src/assets/welcome.jpg)",
        trustus: "url(/src/assets/trustus.jpg)",
      },
    },
  },
  plugins: [],
};
