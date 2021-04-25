const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
    spacing: {
      '1': '10px',
      '2': '14px',
      '3': '18px',
      '4': '32px',
      '5': '42px',
      '6': '64px',
    },
    fontFamily: {
      ...fontFamily,
      sans: ['"Plein"', 'ui-sans-serif', 'system-ui'],
      serif: ['Merriweather', 'ui-serif'],
    },
		extend: {
      typography: {
        DEFAULT: {
          css: {

          }
        }
      }
    },
	},
	plugins: [require('@tailwindcss/typography')],
};
