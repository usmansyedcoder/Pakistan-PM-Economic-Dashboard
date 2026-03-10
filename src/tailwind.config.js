/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pakistan-green": "#01411C",
        "pakistan-dark-green": "#013112",
      },
    },
  },
  plugins: [],
};
