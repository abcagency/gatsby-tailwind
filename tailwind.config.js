/** @type {import('tailwindcss').Config} */
// See https://tailwindcss.com/docs/configuration for details
module.exports = {
	content: [
		'./src/components/**/*.{js,jsx,ts,tsx,vue}',
		'./src/pages/**/*.{js,jsx,ts,tsx,vue}',
		'./data/**/*.{js,jsx,ts,tsx,vue}'
	],
	theme: {
		extend: {
			container: {
				center: true
			},
			cursor: {
				grab: 'grab'
			},
			fontSize: {
				'2xs': '0.65rem',
				300: 'clamp(0.7rem, 0.66rem + 0.2vw, 0.8rem)',
				400: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
				450: 'clamp(1rem, 1rem + 0.33vw, 1.33rem)',
				500: 'clamp(1.09rem, 1rem + 0.47vw, 1.33rem)',
				600: 'clamp(1.37rem, 1.21rem + 0.8vw, 1.78rem)',
				700: 'clamp(1.71rem, 1.45rem + 1.29vw, 2.37rem)',
				800: 'clamp(2.14rem, 1.74rem + 1.99vw, 3.16rem)',
				900: 'clamp(2.67rem, 2.07rem + 3vw, 4.21rem)',
				1000: 'clamp(3.34rem, 2.45rem + 4.43vw, 5.61rem)'
			},
			typography: {
				DEFAULT: {
					css: {
						video: {
							'margin-bottom': 0,
							'margin-top': 0
						}
					}
				},
				'sm': {
					css: {
						video: {
							'margin-bottom': 0,
							'margin-top': 0
						}
					}
				},
				'md': {
					css: {
						video: {
							'margin-bottom': 0,
							'margin-top': 0
						}
					}
				},
				'lg': {
					css: {
						video: {
							'margin-bottom': 0,
							'margin-top': 0
						}
					}
				},
				'xl': {
					css: {
						video: {
							'margin-bottom': 0,
							'margin-top': 0
						}
					}
				},
				'2xl': {
					css: {
						video: {
							'margin-bottom': 0,
							'margin-top': 0
						}
					}
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp')
	]
};
