/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        small: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        hr: "1536px",
      },
      colors: {
        mainBlue: "#0e172a",
        blue: {
          100: "rgb(29,41,65)",
        },
        mainGreen: "#00c976",
        green: {
          200: "#58dad4",
        },

        // green: '#00c483',
        white: "#f2f8f2",
        gray: {
          50: "#d0d0d0",
          100: "#7587a1",
          200: "#60708c",
          300: "#4f6279",
          400: "#151718",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
          width: "100%",
          margin: "0 auto",
          paddingLeft: "16px",
          paddingRight: "16px",
          maxWidth: "500px",
          "@screen small": {
            maxWidth: "640px",
          },
          "@screen tablet": {
            maxWidth: "1024px",
            paddingLeft: "24px",
            paddingRight: "24px",
          },
          "@screen laptop": {
            maxWidth: "1024px",
          },
          "@screen desktop": {
            maxWidth: "1024px",
            paddingLeft: "0px",
            paddingRight: "0px",
          },
          "@screen hr": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};
