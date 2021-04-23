require(`dotenv`).config({
	path: `.env.${process.env.NODE_ENV}`
});

const siteConfig = require(`./data/site.json`);
const resolveConfig = require(`tailwindcss/resolveConfig`);
const tailwindConfig = require(`./tailwind.config.js`);
const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
	siteMetadata: {
		title: `${siteConfig.siteTitle}`,
		description: `${siteConfig.siteDescription}`,
		author: `${siteConfig.author}`,
		siteUrl: `${siteConfig.siteUrl}`
	},
	plugins: [
		`gatsby-plugin-eslint`,
		`gatsby-plugin-gatsby-cloud`,
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: `${siteConfig.analytics.gtmId}`,

				// Include GTM in development.
				//
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				//
				// Defaults to null
				defaultDataLayer: { platform: "gatsby" },

				// Specify optional GTM environment details.
				gtmAuth: `${siteConfig.analytics.gtmAuth}`,
				gtmPreview: `${siteConfig.analytics.gtmPreview}`,
				dataLayerName: `${siteConfig.analytics.dataLayerName}`,

				// Name of the event that is triggered
				// on every Gatsby route change.
				//
				// Defaults to gatsby-route-change
				routeChangeEventName: `${siteConfig.analytics.routeChangeEventName}`
			}
		},
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/data`
			}
		},
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
				name: `${siteConfig.siteTitle}`,
				short_name: `${siteConfig.siteTitleShort}`,
				start_url: `/`,
				background_color: fullConfig.theme.colors.white,
				theme_color: fullConfig.theme.colors.indigo[`700`],
				display: `minimal-ui`,
				icon: `${siteConfig.siteLogo}`
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
