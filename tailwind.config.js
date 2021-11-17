const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/components/*.{js,jsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      normal: '0',
      wider: '.05em',
      widest: '.25em',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0.5px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    screens: {
      sm: '375px',
      md: '720px',
      lg: '1440px',
    },
    colors: {
      brightblue: 'hsl(220, 98%, 61%)',
      verydarkgrayblue: 'hsl(235, 19%, 35%)',
      verydarkgrayblue2: 'hsl(234, 11%, 52%)',
      verydarkgrayblue3: 'hsl(233, 14%, 35%)',
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
      indigo: colors.indigo,
      white: colors.white,
    },
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
      },
      backgroundImage: {
        check: 'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        dark: "url('/src/img/bg-desktop-dark.jpg')",
        light: "url('/src/img/bg-desktop-light.jpg')",
        darkmobile: "url('/src/img/bg-mobile-dark.jpg')",
        lightmobile: "url('/src/img/bg-mobile-light.jpg')",
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
        accent: 'var(--color-bg-accent)',
      },
      container: {
        padding: {
          default: '0.5rem',
          sm: '1rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
