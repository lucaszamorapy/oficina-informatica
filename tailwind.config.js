/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      // screens: {
      //   sm: "320px",
      //   md: "768px",
      //   lg: "960px",
      //   xl: "1220px",
      //   "2xl": "1220px",
      // },
      colors: {
        yellowOficina100: "#FFEC01",
        yellowOficina200: "#FFD233",
        blackOficina100: "#1E1E1E",
        blackOficina200: "#181818",
        whiteOficina100: "#F3F3F3",
        grayOficina100: "#C7C7C7",
      },
      blur: {
        "4xl": "100px", // ou o valor que desejar, como '100px'
      },
    }, // Adicione este colchete de fechamento
  },
  plugins: [],
};
