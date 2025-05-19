/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          light: '#007AFF',
          dark: '#0A84FF',
        },
        secondary: {
          light: '#5856D6',
          dark: '#5E5CE6',
        },
        background: {
          light: '#F2F2F7',
          dark: '#1C1C1E',
        },
        card: {
          light: '#FFFFFF',
          dark: '#2C2C2E',
        },
        text: {
          light: '#000000',
          dark: '#FFFFFF',
        },
        'text-secondary': {
          light: '#8E8E93',
          dark: '#98989D',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 