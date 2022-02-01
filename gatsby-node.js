const path = require('path');

// BROWSERSTACK:
// Hostname restrictions in local server configuration
// https://www.browserstack.com/docs/live/local-testing/ios-troubleshooting-guide#hostname-restrictions-in-local-server-configuration

// Absolute imports
// https://www.gatsbyjs.com/docs/how-to/custom-configuration/add-custom-webpack-config/#absolute-imports
exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		devServer: {
			disableHostCheck: true
		},
		resolve: {
			alias: {
				"~/data": path.resolve(__dirname, 'data'),
				"~/src": path.resolve(__dirname, 'src'),
				"~/components": path.resolve(__dirname, 'src/components'),
				"~/hooks": path.resolve(__dirname, 'src/hooks'),
				"~/images": path.resolve(__dirname, 'src/images')
			}
		}
	});
};

