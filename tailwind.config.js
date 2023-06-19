/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)'
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'button-accent': 'var(--color-button-accent)',
          'button-accent-hover': 'var(--color-button-accent-hover)',
          'button-muted': 'var(--color-button-muted)'
        }
      },
      // colors: {

      // 'primary-button': '#2F2E2E',
      // 'primary-background': '#1A1A1A',
      // 'primary-accent': '#ED6E1E'
      // },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.mono]
      }
    }
  },
  plugins: []
}
