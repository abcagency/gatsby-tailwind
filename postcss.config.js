const tailwind = require(`tailwindcss`);
const autoprefixer = require(`autoprefixer`);
const cssnano = require(`cssnano`);
const tailwindConfig = require("./tailwind.config.js");

module.exports = () => ({
	plugins: [
		tailwind(tailwindConfig),
		autoprefixer,
		...(process.env.NODE_ENV === `production`
			? [cssnano]
			: [])
	]
});
