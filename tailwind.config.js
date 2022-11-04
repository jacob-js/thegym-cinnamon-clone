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
        '137.5': '34.375rem',
        '135': '33.75rem',
        '85': '21.25rem',
        '30': '7.5rem',
        '11.5': '2.875rem',
        '17': '4.25rem',
        '12/10': '120%',
        '7/10': '70%'
      },
      maxWidth: {
        '160': '40rem',
        '139': '34.75rem',
        '85': '21.25rem',
        '75': '18.75rem'
      },
      maxHeight: {
        '100.5': '25.125rem',
        '55': '13.75rem'
      },
      backgroundImage: {
        'noise': "url('https://cinnamon.agency/images/noise.png')"
      },
      boxShadow: {
        'btn': 'rgb(81 53 255) 0px 0px 0px 300px inset',
        'white': 'rgb(255 255 255) 0px 0px 0px 155px inset'
      },
      colors: {
        'primary': 'rgb(81, 53, 255)',
        'light': 'rgb(207, 207, 207)',
        'purple': '#50227D',
        'green': '#91F1C3',
        'lighter': '#F6F6F6',
        'thin-light': '#3F3F3F',
        'grey': '#525252',
        'gold': '#FFCB47'
      },
      fontSize: {
        '64.5': '16.125rem',
        '43.75': '10.9375rem',
        '20': '5rem',
        '22': '5.5rem',
        '13.5': '3.375rem',
        '4.5xl': '2.5rem',
        '8': '2rem',
        '5': '1.25rem'
      },
      lineHeight: {
        '14': '3.5rem'
      }
    },
  },
  plugins: [],
}
