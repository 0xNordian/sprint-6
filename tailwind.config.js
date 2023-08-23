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
        cSecondary: '#DC7F32',
        cDanger: '#e53e3e',
        cWarning: '#f6ad55',
      }
    },
  },
  plugins: [],
}

