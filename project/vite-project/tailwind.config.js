/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {},
    },
    colors: {
      blue: "#3761F3",
      white: "#FFF",
    },
    boxShadow: {
      "box-shadow": "0px 4px 24px 0px rgba(0, 0, 0, 0.12)",
    },
  },
  plugins: [],
};
