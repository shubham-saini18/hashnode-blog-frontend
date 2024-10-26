/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class', // Enable dark mode using a class
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        primary: {
          50: '#e6f6f1',
          100: '#c1ede4',
          200: '#9ce1d7',
          300: '#6cd5c9',
          400: '#3bc6bb',
          500: '#00a587',
          600: '#009473',
          700: '#00805f',
          800: '#006c4b',
          900: '#005a39',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        background: {
          light: '#F9FAFB',
          dark: '#1F2937',
        },
        text: {
          primary: '#111827',
          secondary: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern font family
      },
      spacing: {
        18: '4.5rem',
        28: '7rem',
        44: '11rem',
        68: '17rem',
        88: '22rem', // Additional spacing for larger components
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
        '9xl': '8rem', // Extra large headings for hero sections
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
        lg: '0 10px 25px rgba(0, 0, 0, 0.15)',
        xl: '0 20px 50px rgba(0, 0, 0, 0.25)',
        glow: '0 4px 15px rgba(0, 132, 255, 0.5)', // Add a soft glow shadow
      },
      transitionProperty: {
        width: 'width',
        spacing: 'margin, padding',
        background: 'background', // Add background transitions
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        gradient: 'gradientShift 5s ease infinite', // For animated gradient backgrounds
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'), // Optional: add forms plugin for styling form elements
    require('@tailwindcss/aspect-ratio'), // Optional: add aspect ratio plugin for image and video components
    require('@tailwindcss/line-clamp'), // Optional: add line clamp for multi-line text truncation
  ],
};
