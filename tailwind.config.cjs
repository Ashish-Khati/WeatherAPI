module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      textFont:'Poppins',
      paraFont:'Open Sans'
    },
    letterSpacing:{
      spaceBtwn:"3px"
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      // sm: '640px',
      // md: '968px',
      md:'800px',
      lg: '960px',
      a:'1100px',
      b:"1050px",
      c:"600px",
      d:"450px",
      e:"200px",
      xl: '1200px',
      xxl:"1450px",
      f:"1340px",
      g:"650px",
      // h:"660px",
      i:"400px",
    },
    sizes:{
      // vsm:"380px",
      // lg:"780px",
      // md:"650px",
      // sm:"500px"
      
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        btnColor:"#ffb600",
        bannerText:"rgb(2,34,121)"
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
