const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html,svg}'
    , './gatsby-ssr.js'],


  darkMode: 'class',

  theme: {
    extend: {

      fontSize : {
        'inherit' : 'inherit'
      },

      color : {
        'inherit' : 'black'
      },

      colors: {
        neutral: colors.neutral,
        inherit: colors.white,
      },

      fontFamily: {
        'nexa': ['nexa sans-serif']
      },

      boxShadow: {
        "blue": '0px 0px 40px rgba(66,183,237,0.5)',
        "blue-extended": '0px 0px 60px rgba(66,183,237,0.5)',
      },

      backgroundColor: {
        'card-surface': '#1A232C'
      },

      borderRadius: {
        'card': '50px',
      }
    },

    screens: {
      'laptop': '1024px',
      'large': '1300px',
      'desktop': '1550px'
    },
  },

  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },


  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar-hide')
  ],


  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0ea5e9",

          "secondary": "#F000B8",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },


}