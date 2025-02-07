/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-rgb))',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'scroll': 'scroll var(--animation-duration) linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'shimmer': {
          '0%': {
            'transform': 'translateX(-100%)',
          },
          '100%': {
            'transform': 'translateX(100%)',
          },
        },
        'scroll': {
          '0%': {
            'transform': 'translateX(0)',
          },
          '100%': {
            'transform': 'translateX(calc(-50%))',
          },
        },
      },
    },
  },
  plugins: [],
} 