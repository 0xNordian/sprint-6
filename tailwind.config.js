/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cPrimary: '#3490dc',
        cSecondary: '#000',
        cDanger: '#e53e3e',
        cWarning: '#f6ad55',
      }
    },
  },
  plugins: [],
}

