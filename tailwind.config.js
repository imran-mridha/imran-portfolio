/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
    },
    screens: {
      '4xsm': '280px',
      '3xsm': '320px',
      '2xsm': '376px',
      xsm: '405px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: "#041732",
        secondary: "#1C1D24",
        tertiary: "#131419",
        accent: {
          DEFAULT: "#94a3b8",
          hover: "#cbd5e1",
        },
        paragraph: "#878e99",
      },
    },
  },
  plugins: [require("daisyui")],
};
