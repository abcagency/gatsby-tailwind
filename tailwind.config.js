// See https://tailwindcss.com/docs/configuration for details
module.exports = {
	purge: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
