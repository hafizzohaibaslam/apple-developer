/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html","./dist/app.js"],
  theme: {
    extend: {
      colors:{
      }
    },

        screens: {
      'mobile': {'max': '600px'},
      'tablet': {'max':'1023px'},

      'tabletOnly': {'min':'600px', 'max':'1023px'},
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1400px',
      // => @media (min-width: 1280px) { ... }
    },



  },
  plugins: []
}


