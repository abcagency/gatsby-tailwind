const path = require('path');

// Absolute imports
// https://www.gatsbyjs.com/docs/how-to/custom-configuration/add-custom-webpack-config/#absolute-imports
exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"~/data": path.resolve(__dirname, 'data'),
				"~/src": path.resolve(__dirname, 'src'),
				"~/components": path.resolve(__dirname, 'src/components'),
				"~/images": path.resolve(__dirname, 'src/images')
			}
		}
	});
};

