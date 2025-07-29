/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#0033A1', // deep cobalt
          600: '#002d91',
          700: '#002680',
          800: '#001f70',
          900: '#001860',
        },
        secondary: {
          50: '#e6f9ff',
          100: '#b3ecff',
          200: '#80dfff',
          300: '#4dd2ff',
          400: '#1ac5ff',
          500: '#00A6D6', // turquoise
          600: '#0095c1',
          700: '#0084ac',
          800: '#007397',
          900: '#006282',
        },
        accent: {
          50: '#fefcf0',
          100: '#fdf6d1',
          200: '#fcf0b3',
          300: '#fbea94',
          400: '#fae475',
          500: '#FCCA46', // warm yellow
          600: '#e3b53f',
          700: '#ca9f38',
          800: '#b18a31',
          900: '#98752a',
        },
        'neutral-dark': {
          50: '#f7f8fa',
          100: '#e8edf2',
          200: '#d1dae5',
          300: '#b3c4d4',
          400: '#8da3b8',
          500: '#5c7a96',
          600: '#3d5a7a',
          700: '#2a4760',
          800: '#1a3447',
          900: '#0A1E2D', // deep navy
        },
        'neutral-light': {
          50: '#F4F7FA', // light blue-gray
          100: '#e9eef4',
          200: '#d3dde8',
          300: '#bdccdc',
          400: '#a7bbd0',
          500: '#91aac4',
          600: '#7b99b8',
          700: '#6588ac',
          800: '#4f77a0',
          900: '#396694',
        },
      },
      fontFamily: {
        sans: ['Inter', 'var(--font-fallback)', 'system-ui', 'sans-serif'],
      },
      containers: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-left': 'slide-left 25s linear infinite',
        'slide-right': 'slide-right 25s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-pause': 'marquee 25s linear infinite paused',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 50px -10px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
