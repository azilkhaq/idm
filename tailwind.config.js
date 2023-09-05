// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['D-DIN-BOLD'],   
        describe: ['D-DIN'],       
        secDescribe: ['ShareTechMono-Regular'], 
      },
      colors: {
        'blue-tua': '#001743',
      },
    },
  },
  variants: {},
  plugins: [],
}
