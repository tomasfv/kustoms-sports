/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js','./src/**/*.{html,js}',
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      'main':{
        light:'#FFF',
        dark:'#070707',
      },
      'gris':{
        light:'#A7A7A7',
        dark:'#212121',
      },
      'verde':{
        light:'#18C977',
        dark:'#52B788'
      },
      'botvioleta':{
        dark:'#590E65',
        light:'#8D12A1'
      },
      'degAcento':{
        dark:'#000000',
        light:'#1C89A1',
      },
      'red':{
        dark: '#990000' 
      }
    },
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: false,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },

}
