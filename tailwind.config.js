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
          'dark-button': 'var(--color-dark-button)',
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)'
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-background-fill)',
          'button-hover-primary': 'var(--color-button-hover-primary)',
          'button-hover-alternative': 'var(--color-button-hover-alternative)'
          // fill: 'var(--color-fill)',
          // 'button-accent': 'var(--color-button-accent)',
          // 'button-accent-hover': 'var(--color-button-accent-hover)',
          // 'button-muted': 'var(--color-button-muted)'
        }
      },
      screens: {
        'mobile-m': '320px',
        'mobile-s': '375px',
        'mobile-l': '425px'
      },
      colors: {
        'modal-button': 'var(--color-modal-button)',
        'border-fill': 'var(--color-border)',
        'button-fill': 'var(--color-button-fill)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)'
        // base: 'var(--color-text-base)',
        // 'base-inverted': 'var(--color-button-alternative)'
      },

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
