const {theme} = require('tailwindcss/defaultConfig')
module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        button: 'var(--color-text-button)',
        nav: 'var(--color-text-nav)',
        link: 'var(--color-text-link)',
        'link-secondary': 'var(--color-text-link-secondary)'
      },
      backgroundColor: {
        pramuka: 'var(--color-background-pramuka)',
        primary: 'var(--color-background-primary)',
        hover: 'var(--color-background-hover)',
        card: 'var(--color-background-card)'
      }
    },
    inset: {
      '0': 0,
      '1/2': '50%',
    },
    minWidth: {
      '80': '80px',
      '150': '150px',
      '250': '250px',
      full: '100%',
    },
    minHeight: {
      '80': '80px',
      full: '100%',
      screen: '100vh',
    },
    listStyleType: {
      ...theme.listStyleType,
      'lower-alpha': 'lower-alpha',
    }
  },
  variants: {},
  plugins: [],
};
