/** @type {import('tailwindcss').Config} */ //❓still not sure what this is

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        LibreFranklin: ['Libre Franklin', 'sans-serif'],
      },
      scale: {
        120: '1.2',
        130: '1.3',
      },

      colors: {
        primary: {
          blue: 'hsl(223, 87%, 63%)',
        },
        secondary: {
          'pale-blue': 'hsl(223, 100%, 88%)',
          'light-red': 'hsl(354, 100%, 66%)',
        },
        neutral: {
          gray: 'hsl(0, 0%, 59%)',
          'very-dark-blue': 'hsl(209, 33%, 12%)',
        },
        red: {
          500: '#f56565',  // Custom red color
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
