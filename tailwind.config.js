module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: false,
  theme: {
    extend: {
      width: {
        73: '293px',
      },
      height: {
        49: '196px',
      },
      fontFamily: {
        Silka: ['Silka', 'sans-serif'],
      },
      colors: {
        'lh-bg-gray': '#E5F0EE',
        'lh-jungle-green': '#012D26',
        'lh-green-gray': '#5B6866',
        'lh-md-blue': '#EBEDFF',
        'lh-sky-blue': '#3948FF',
      },
      screens: {
        tablet: '768px',
        laptop: '1024px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};