/** @type {import('tailwindcss').Config} */
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
      fontSize: {
        h1: "2.5rem",
        h2: "2.25rem",
        h3: "2rem",
        h4: "1.75rem",
        h5: "1.5rem",
        h6: "1.25rem",
      },
      borderWidth: { default: "2px" },
      colors: {
        primary: "#343A40",
        secondary: "#FAB61F",
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
