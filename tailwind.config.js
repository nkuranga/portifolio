module.exports = {
  content: ['./pages/**/*.{tsx,ts,js,jsx}','./components/**/*.{tsx,ts,js,jsx}'],
  theme: {
  
    extend: {
      colors:{
        green:{
          DEFAULT: '#00f260',
        },
      },
      fontFamily:{
        pacifico: ['Pacifico', 'cursive'],
        kaushan: ['kaushan script']
      },
      backgroundImage:{
        'backImg': "url('/images/back2.png')"
      }
    },
  },
  plugins: [],
}
