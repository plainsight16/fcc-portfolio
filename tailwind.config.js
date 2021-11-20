module.exports = {
  mode:"jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        "body":["Poppins"],
        "headers":["Raleway"]
      },
      colors:{
        "main-white": "#f0f0f0",
        "main-red": "#be3144",
        "main-blue": "#45567d",
        "main-gray": "#303841",
        "hero-gradient-1": "#3a3d40",
        "hero-gradient-2": "#181719"
      },
      fontSize:{
        "nav-link":"2.2rem",
        "hero-header":"6rem",
        "project-header":"4.2rem",
        "project-title":"2rem",
        "general":"1.8rem"
      },
    },
   
   
    container:{
      center:true,
      padding:"2rem"
    }
  },
 
  variants: {
    extend: {},
  },
  plugins: [],
}
