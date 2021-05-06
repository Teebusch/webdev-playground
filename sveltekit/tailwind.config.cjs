const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
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
