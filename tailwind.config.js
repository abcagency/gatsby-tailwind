// See https://tailwindcss.com/docs/configuration for details
module.exports = {
	purge: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography")
	],
};
