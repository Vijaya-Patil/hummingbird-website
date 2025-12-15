/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C1F26",
        accent: "#F47C20",
        light: "#F5F5F5",
        muted: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
