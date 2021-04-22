require(`dotenv`).config({
	path: `.env.${process.env.NODE_ENV}`
});

const resolveConfig = require(`tailwindcss/resolveConfig`);
const tailwindConfig = require(`./tailwind.config.js`);
const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
	siteMetadata: {
		title: `Gatsby Starter Tailwind`,
		description: `Gatsby starter styled with Tailwind`,
		author: `@abc_Creative`,
		siteUrl: `https://gatsbytailwind.gatsbyjs.io/`
	},
	plugins: [
		`gatsby-plugin-eslint`,
		`gatsby-plugin-gatsby-cloud`,
		// {
		// 	resolve: "gatsby-plugin-google-tagmanager",
		// 	options: {
		// 		id: "YOUR_GOOGLE_TAGMANAGER_ID",

		// 		// Include GTM in development.
		// 		//
		// 		// Defaults to false meaning GTM will only be loaded in production.
		// 		includeInDevelopment: false,

		// 		// datalayer to be set before GTM is loaded
		// 		// should be an object or a function that is executed in the browser
		// 		//
		// 		// Defaults to null
		// 		defaultDataLayer: { platform: "gatsby" },

		// 		// Specify optional GTM environment details.
		// 		gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
		// 		gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
		// 		dataLayerName: "YOUR_DATA_LAYER_NAME",

		// 		// Name of the event that is triggered
		// 		// on every Gatsby route change.
		// 		//
		// 		// Defaults to gatsby-route-change
		// 		routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME"
		// 	}
		// },
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-tailwind`,
				short_name: `starter`,
				start_url: `/`,
				background_color: fullConfig.theme.colors.white,
				theme_color: fullConfig.theme.colors.indigo[`700`],
				display: `minimal-ui`,
				icon: `src/images/tailwind-icon.png`
			}
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: fullConfig.theme.colors.indigo[`700`],
				showSpinner: false
			}
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-use-dark-mode`,
			options: {
				classNameDark: `dark-mode`,
				classNameLight: `light-mode`,
				storageKey: `darkMode`,
				minify: true
			}
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				query: `
					{
						site {
							siteMetadata {
								siteUrl
							}
						}

						allSitePage {
							nodes {
								path
							}
						}
				}`,
				serialize: ({ site, allSitePage }) =>
					allSitePage.nodes.map(node => {
						switch (node.path) {
						case '':
						case ' ':
						case '/':
							return {
								url: `${site.siteMetadata.siteUrl}${node.path}`,
								changefreq: `daily`,
								priority: 1
							};
						default:
							if (node.path.indexOf('posts/') >= 0) {
								return {
									url: `${site.siteMetadata.siteUrl}${node.path}`,
									changefreq: `weekly`,
									priority: 0.8
								};
							}
							return {
								url: `${site.siteMetadata.siteUrl}${node.path}`,
								changefreq: `monthly`,
								priority: 0.5
							};
						}
					})
			}
		},
		{
			resolve: `gatsby-source-datocms`,
			options: {
				apiToken: process.env.DATO_API_TOKEN,
				environment: `main`,
				previewMode: false,
				disableLiveReload: false,
				localeFallbacks: {
					it: ['en']
				}
			}
		},
		`gatsby-transformer-sharp`
	]
};
