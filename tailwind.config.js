/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow:{
        '3xl':"0px 2px 20px 0px rgba(0, 0, 0, 0.10)"
      },
      globalFont:{
        'av': "Avenir-Next",
      },
      colors:{
        gray:"#9B9BA1"
      },
      
    },
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors:true,
  })]
}
