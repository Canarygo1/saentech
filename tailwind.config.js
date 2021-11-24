module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      primary: '#BDD345',
      secondary: '#58585A'
    },
    fontSize: {
      'xs': '10px',
      'sm': '12px',
      'md': '14px',
      'lg': '16px',
      'xl': '18px',
      '2xl': '22px',
      '7xl': '48px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
