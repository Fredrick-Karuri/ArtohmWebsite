module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" }, lg:{min:"551px"} },
    extend: {
      colors: {
        black: { 900: "#000000", "900_7e": "#0000007e" },
        blue: {
          100: "#ccdefb",
          200: "#99bafa",
          900: "#0042bc",
          A700: "#0459f4",
          A200: "#5b94fb",
        },
        pink: {
          50: "#ffe6eb",
          100: "#faa7d5",
          300: "#e34e9c",
          900: "#74254b",
          "300_01": "#ff6b88",
        },
        blue_gray: { 400: "#8d8d8d" },
        light_blue: { 100: "#aad3ff", A700: "#007bff" },
        gray: { 900: "#001131" },
        red: { 300: "#d45971" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        librebaskerville: "Libre Baskerville",
        lato: "Lato",
        roboto: "Roboto",
      },
      boxShadow: { bs: "inset 0px -1px  1px 0px #000000" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
