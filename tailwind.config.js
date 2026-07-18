/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#f7f1e6',
          200: '#efe4d0',
          300: '#e4d3b3',
        },
        sand: '#e7dac3',
        maroon: {
          DEFAULT: '#7a1522',
          50: '#fbeef0',
          100: '#f2d3d6',
          400: '#a03040',
          500: '#8a1c29',
          600: '#7a1522',
          700: '#5f0f19',
          800: '#450a12',
          900: '#2b060b',
        },
        ink: '#1b1b1b',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Jost"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '.3em',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
}
