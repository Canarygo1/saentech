module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      height: {
        '100': '40rem',
        '110': '64rem',
      },
      zIndex: {
        'ocult': '-20',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1165px',
        'xl': '1280px',
        '2xl': '1536px',
      },

    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      primary: '#BDD345',
      lightgrey:'#F6F6F6',
      secondary: '#58585A',
      blue: '#0084C1',
      darkBlue: '#455880',
      darkGreen: '#3A8484',
      lightGreen: '#49A280',
      blackFont: '#555555',
      error:'#F44336'
    },
    fontFamily:{
      'display': ['Roboto'],
    },
    fontSize: {
      'xs': '10px',
      'sm': '12px',
      'md': '14px',
      'lg': '16px',
      'xl': '18px',
      '1xl': '20px',
      '2xl': '22px',
      '3xl': '32px',
      '7xl': '48px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
