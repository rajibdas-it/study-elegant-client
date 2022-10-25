/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f791a2",

          secondary: "#a4d2e8",

          accent: "#f9b3ca",

          neutral: "#1B1820",

          "base-100": "#EDEDEE",

          info: "#679DE4",

          success: "#176E3B",

          warning: "#9C6F07",

          error: "#E36759",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
