module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      primary: '#BDD345',
      secondary: '#58585A',
      blue: '#0084C1',
      darkBlue: '#455880',
    },
    fontSize: {
      'xs': '10px',
      'sm': '12px',
      'md': '14px',
      'lg': '16px',
      'xl': '18px',
      '1xl': '21px',
      '2xl': '22px',
      '7xl': '48px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
