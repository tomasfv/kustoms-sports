/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
    'main':{
    light:'#EBEBEB',
    darK:'#070707',
    },
    'gris':{
    light:'#A7A7A7',
    darK:'#212121',
    },
    'verde':{
    light:'#52B788',
    dark:'52B788'
    },
    'botvioleta':{
    dark:'590E65',
    light:'#8D12A1'
    },
    'degAcento':{
    dark:'#000000',
    light:'#1C89A1',
    }},
    extend: {},
  },
  plugins: [],
}
