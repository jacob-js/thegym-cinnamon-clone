/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '160': '40rem',
        '30': '7.5rem',
        '11.5': '2.875rem',
        '12/10': '120%'
      },
      maxWidth: {
        '160': '40rem',
      },
      backgroundImage: {
        'noise': "url('https://cinnamon.agency/images/noise.png')"
      },
      boxShadow: {
        'btn': 'rgb(81 53 255) 0px 0px 0px 155px inset',
        'white': 'rgb(255 255 255) 0px 0px 0px 155px inset'
      },
      colors: {
        'primary': 'rgb(81, 53, 255)',
        'light': 'rgb(207, 207, 207)',
        'purple': '#50227D',
        'green': '#91F1C3',
        'lighter': '#F6F6F6'
      },
      fontSize: {
        '20': '5rem',
        '22': '5.5rem',
        '13.5': '3.375rem',
        '4.5xl': '2.5rem',
      },
      lineHeight: {
        '14': '3.5rem'
      }
    },
  },
  plugins: [],
}
