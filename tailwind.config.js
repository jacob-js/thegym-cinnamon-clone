/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '11.5': '2.875rem',
        '12/10': '120%'
      },
      backgroundImage: {
        'noise': "url('https://cinnamon.agency/images/noise.png')"
      },
      boxShadow: {
        'btn': 'rgb(81 53 255) 0px 0px 0px 155px inset',
        'white': 'rgb(255 255 255) 0px 0px 0px 155px inset'
      },
      colors: {
        'primary': 'rgb(81, 53, 255)'
      }
    },
  },
  plugins: [],
}
