module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["night", "forest", "halloween", "dark", "cupcake", "lemonade"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
