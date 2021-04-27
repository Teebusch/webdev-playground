const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
    // spacing: {
    //   '1': '10px',
    //   '2': '20px',
    //   '3': '40px',
    //   '4': '32px',
    //   '5': '42px',
    //   '6': '64px',
    // },
    fontFamily: {
      ...fontFamily,
      sans: ['"Plein"', 'ui-sans-serif', 'system-ui'],
      serif: ['Yesteryear', 'ui-serif'],
    },
		extend: {
      fontSize: {
        '10xl': '10rem',
        'xxl': '25rem',
      },
      typography: {
        DEFAULT: {
          css: {
            'a' : {
              'text-decoration': 'none',
            }
          }
        },
      }
    },
	},
	plugins: [require('@tailwindcss/typography')],
};
