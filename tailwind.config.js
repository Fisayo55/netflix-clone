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
        "custom-transparent": "#000000b0",
        181818: "#181818",
      },
      textColor: {
        "custom-red": "#f34242",
        b8b8b8: "#b8b8b8",
      },
    },
  },
  plugins: [],
};
