/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'corange': '#F19653',
        'cpurple': '#B77CB8',
        'cred': '#F07266',
        'cpink':'#FF0D87',
        'cgray':'#DEDEDE',
        'cblack':'#000000',
        'cwhite':'#FFFFFF',
        'dwhite':'rgba(243,240,240,0.8)',
      },
    },
  },
  plugins: [],
}

