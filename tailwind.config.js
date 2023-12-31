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
          'fill-muted': 'var(--color-background-fill-muted)',
          'button-hover-primary': 'var(--color-button-hover-primary)',
          'button-hover-alternative': 'var(--color-button-hover-alternative)'
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
        'button-muted': 'var(--color-button-muted)',
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
