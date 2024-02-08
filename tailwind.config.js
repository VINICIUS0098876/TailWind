/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./img/background.png')",
        'footer-texture': "url('/img/bombom.png')",
        'footer-texture': "url('/img/logo.png')",
        'footer-texture': "url('/img/ferreroroche.png')",
    
      },
      
    },
  },
  plugins: [],
}

