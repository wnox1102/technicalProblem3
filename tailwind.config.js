/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
      './context/**/*,{js,jsx,ts,tsx}',
    ],
  },
  darkMode: 'media', // 'media' or 'class'
  theme: {
    screens: {
      xs: '320px',
      phoneLG: '375px',
      phoneXL: '411px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: {
          100: '#E0F2FF',
          200: '#0093FF',
          300: '#0588E9',
          400: '#006DBD',
          500: '#0164AD',
          600: '#004F89',
          700: '#003B66',
        },
        secondary: {
          100: '#F7FAFC',
          200: '#E5E5E5',
          300: '#ECECEC',
          400: '#909192',
          500: '#808182',
          600: '#6D6F71',
          700: '#5C5D5F',
          800: '#3F4143',
          900: '#212223',
        },
        extra: {
          100: '#EDF2F7',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
