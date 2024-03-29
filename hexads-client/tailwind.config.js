/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto Mono", "monospace"],
      },
      colors: {
        background: "#020109",
        border: "#312640",
        primary: "#FFFFFF",
        secondary: "#56486B",
        accent: "#EDB013",
        mandatory: "#FF5263",
        green: "#32C991",
      },
      lineHeight: {
        "20px": "20px",
      },
    },
  },
  plugins: [],
};
