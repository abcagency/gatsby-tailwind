// See https://tailwindcss.com/docs/configuration for details
module.exports = {
	mode: 'jit',
	darkMode: 'media',
	purge: [
		"./public/**/*.html",
		"./src/**/*.{js,jsx,ts,tsx,vue}"
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						video: {
							"margin-bottom": 0,
							"margin-top": 0
						}
					}
				},
				'sm': {
					css: {
						video: {
							"margin-bottom": 0,
							"margin-top": 0
						}
					}
				},
				'md': {
					css: {
						video: {
							"margin-bottom": 0,
							"margin-top": 0
						}
					}
				},
				'lg': {
					css: {
						video: {
							"margin-bottom": 0,
							"margin-top": 0
						}
					}
				},
				'xl': {
					css: {
						video: {
							"margin-bottom": 0,
							"margin-top": 0
						}
					}
				},
				'2xl': {
					css: {
						video: {
							"margin-bottom": 0,
							"margin-top": 0
						}
					}
				}
			}
		}
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography")
	]
};
