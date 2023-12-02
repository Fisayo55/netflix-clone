/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      backgroundColor: {
        "custom-red": "rgb(229, 9, 20)",
      },
    },
  },
  plugins: [],
};
