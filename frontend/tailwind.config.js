/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class', // enables class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        accent: 'var(--accent)',
      },
      backgroundColor: {
        card: 'var(--card-bg)',
      },
      textColor: {
        default: 'var(--text)',
      },
    },
  },
  plugins: [],
};