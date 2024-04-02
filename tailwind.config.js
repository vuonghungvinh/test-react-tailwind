/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "600px",
        md: "720px",
      },
      fontFamily: {
        "apercu-pro": ["Apercu Pro"],
      },
      gridTemplateRows: {
        "signup-layout": "52px auto 52px",
      },
      colors: {
        primary: "#191919",
        grey: {
          100: "#a0a0a0",
          200: "#f0f0f0",
          300: "#c2c2c1",
          500: "#5e5e5e",
          600: "#7f7f7f",
        },
        invalid: "#c13b2f"
      },
      fontSize: {
        "4xl": ["36px", "44px"],
      },
      boxShadow: {
        dialog: "rgba(25, 25, 25, 0.12) 0px 2px 5px 0.5px",
      },
      spacing: {
        base: "5px",
        3.75: "15px",
        4.5: "18px",
        5.5: "22px",
        7.5: "30px",
      },
    },
  },
  plugins: [],
};
