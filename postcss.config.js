const tailwind = require(`tailwindcss`);
const autoprefixer = require(`autoprefixer`);
const presetEnv = require('postcss-preset-env');
const tailwindConfig = require("./tailwind.config.js");

module.exports = () => ({
	plugins: [
		tailwind(tailwindConfig),
		presetEnv({
			autoprefixer: false,
			stage: 1
		}),
		autoprefixer
	]
});
