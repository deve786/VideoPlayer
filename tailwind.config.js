const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '475px'},
        'sm': {'max': '639px'},
        'md': {'max': '767px'},
        'lg': {'max': '1023px'},
        'xl': {'max': '1279px'},
        '2xl': {'max': '1535px'},
      },
    },
    
  },
  plugins: [],
  
});
