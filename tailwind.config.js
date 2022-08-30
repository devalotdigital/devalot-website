/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        perso: ["Poppins"],
      },
      colors: {
        primary: "#117DBB",
        secondary: "#030067",
        tertiary: "#FB445B",
        quaternary: "#807f80",
      },
      backgroundImage: {
        welcome: "url(/src/assets/welcome.jpg)",
        trustus: "url(/src/assets/trustus.jpg)",
        contact: "url(/src/assets/contact.jpg)",
      },
      boxShadow: {
        box: "10px 10px 0px 0px rgba(0,0,0,0.75);",
        boxl: "-10px 10px 0px 0px rgba(0,0,0,0.75);",
      },
    },
  },
  plugins: [],
};
