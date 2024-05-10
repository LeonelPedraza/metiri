/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "appbar": "#CEDCE4",
        "bradcrumbs": "#E7F0F6",
        "sidebar": "#E4EAEF"
      }
    },
  },
  plugins: [],
}

