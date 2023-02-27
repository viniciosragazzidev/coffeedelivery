/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        '2_xl': '1440px',

      },
      colors: {
        // Primary
        "yellow-dark": "#C47F17",
        yellow: "#DBAC2C",
        "yellow-light": "#F1E9C9",
        // Secondary
        "purple-dark": "#4B2995",
        purple: "#8047F8",
        "purple-light": "#EBE5F9",
        // Base
        base: {
          title: "#272221",
          subtitle: "#403937",
          text: "#574F4D",
          label: "#8D8686",
          hover: "#D7D5D5",
          button: "#E6E5E5",
          input: "#EDEDED",
          card: "#F3F2F2",
          background: "#FAFAFA",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
