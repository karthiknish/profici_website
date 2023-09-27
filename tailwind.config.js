/** @type {import('tailwindcss').Config} */
const themeData = require("./theme.json");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "0rem",
      },
    },
    extend: {
      fontFamily: {
        signika: ["Signika", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        small: themeData.settings.typography.fontSizes.find(
          (f) => f.slug === "small"
        ).size,
        base: themeData.settings.typography.fontSizes.find(
          (f) => f.slug === "regular"
        ).size,
        lg: themeData.settings.typography.fontSizes.find(
          (f) => f.slug === "large"
        ).size,
        xl: themeData.settings.typography.fontSizes.find((f) => f.slug === "xl")
          .size,
        "2xl": themeData.settings.typography.fontSizes.find(
          (f) => f.slug === "xxl"
        ).size,
        "3xl": themeData.settings.typography.fontSizes.find(
          (f) => f.slug === "xxxl"
        ).size,
      },
      borderWidth: { default: "2px" },
      colors: {
        primary: themeData.settings.color.palette.find(
          (c) => c.slug === "primary"
        ).color,
        secondary: themeData.settings.color.palette.find(
          (c) => c.slug === "secondary"
        ).color,
        dark: themeData.settings.color.palette.find((c) => c.slug === "dark")
          .color,
        light: themeData.settings.color.palette.find((c) => c.slug === "light")
          .color,
      },
    },
    screens: {
      xs: "480px",
      sm: "600px",
      md: "782px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
