/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'big-1': "url('/big-logo.png')",
        'big-2': "url('/big-logo-2.png')",
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1400px',
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    }
  },
  plugins: [require('flowbite/plugin')],
}

