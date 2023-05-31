/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-nunito-sans)',
        alt: 'var(--font-righteous)',
      },
      colors: {
        pink: {
          50: '#fff0f1',
          100: '#ffe2e4',
          200: '#ffc9d1',
          300: '#ff9caa',
          400: '#ff657e',
          500: '#ff2f56',
          600: '#f4194c',
          700: '#cd0337',
          800: '#ac0535',
          900: '#920935',
          950: '#520017',
        },
        gray: {
          50: '#f8f8f8',
          100: '#f1f0ef',
          200: '#e6e3e2',
          300: '#d4d0cd',
          400: '#bab3af',
          500: '#a09893',
          600: '#887f7a',
          700: '#716964',
          800: '#5f5955',
          900: '#524d4a',
          950: '#2a2725',
        },
      },
      gridTemplateColumns: {
        table: '1rem 1fr 1rem',
      },
      gridTemplateRows: {
        table: '1rem 1fr 1rem',
      },
    },
  },
  plugins: [],
}
