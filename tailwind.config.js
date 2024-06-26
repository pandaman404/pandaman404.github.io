/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '800px',
        xl: '900px',
      },
    },
    extend: {
      fontFamily: {
        logo: ['Architects Daughter', 'cursive'],
        body: ['Manrope', 'sans-serif'],
      },
      colors: {
        carbon: {
          100: '#f8f8f8',
          200: '#EEEEEE',
          300: '#D4D4D8',
          400: '#9E9EA7',
          500: '#3c3f4480',
          800: '#18181B',
          900: '#0e0e11',
        },
        razer: '#00fe60',
      },
      spacing: {
        navbar: '75px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 300ms ease-in-out',
        cursor: 'cursor 1s infinite;',
      },
      keyframes: {
        cursor: {
          '0%': { opacity: 0 },
          '40%': { opacity: 0 },
          '50%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      gridTemplateColumns: {
        'auto-fit-200': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
};
