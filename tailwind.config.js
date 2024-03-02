const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        principal: '#F0F0F0',
        caramelo: '#C67C4E',
        color1: '#2F4B4E',
        color2: '#2F2D2C',
        color3: '#9B9B9B',
        input: '#313131'
      }

    }
  },
  plugins: []
}
