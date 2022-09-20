module.exports = {
  purge: ['./src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        Silka: ['Silka', 'sans-serif'],
      },
      colors: {
        'lh-bg-gray': '#E5F0EE',
        'lh-jungle-green': '#012D26',
        'lh-green-gray': '#5B6866',
        'lh-md-blue': '#EBEDFF',
        'lh-sky-blue': '#3948FF',
        'lh-caribbean-green': '#3ECFAF',
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
