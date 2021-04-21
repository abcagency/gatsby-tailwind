const path = require('path');

// Absolute imports
// https://www.gatsbyjs.com/docs/how-to/custom-configuration/add-custom-webpack-config/#absolute-imports
exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"~/src": path.resolve(__dirname, 'src'),
				"~/components": path.resolve(__dirname, 'src/components'),
				"~/images": path.resolve(__dirname, 'src/images')
			}
		}
	});
};

// Create blog post pages
// Page redirects
exports.createPages = async ({ graphql, actions }) => {
	const { createPage, createRedirect } = actions;

	createRedirect({ fromPath: "/old-url", toPath: "/about", isPermanent: true });

	const createBlogsPosts = new Promise((resolve, reject) => {
		try {
			graphql(`
				{
					allDatoCmsBlogPost {
						nodes {
							slug
						}
					}
				}
			`).then(res => {
				const posts = res.data.allDatoCmsBlogPost.nodes;
				posts.map(post => {
					const { slug } = post;
					return createPage({
						path: `/posts/${slug}`,
						component: path.resolve('./src/templates/post.js'),
						context: {
							slug
						}
					});
				});
				resolve();
			});
		} catch (error) {
			reject(error);
		}
	});

	return Promise.all([createBlogsPosts]);
};
