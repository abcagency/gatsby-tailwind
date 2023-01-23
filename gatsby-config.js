require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

const siteConfig = require('./data/site.json');
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');
const fullConfig = resolveConfig(tailwindConfig);

const path = require('path');
const gatsbyEslintRequiredRules = path.join(
	process.cwd(),
	'node_modules',
	'gatsby',
	'dist',
	'utils',
	'eslint-rules'
);

module.exports = {
	trailingSlash: 'never',
	siteMetadata: {
		title: `${siteConfig.title}`,
		description: `${siteConfig.description}`,
		author: `${siteConfig.author}`,
		url: `${siteConfig.url}`,
		image: `${process.env.HOST}/${siteConfig.image}`
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				// Gatsby required rules directory
				rulePaths: [gatsbyEslintRequiredRules],
				// Default settings that may be ommitted or customized
				stages: ['develop'],
				extensions: ['js', 'jsx', 'ts', 'tsx'],
				exclude: ['node_modules', 'bower_components', '.cache', 'public']
			}
		},
		{
			resolve: 'gatsby-plugin-gatsby-cloud'
		},
		// {
		// 	resolve: 'gatsby-plugin-google-tagmanager',
		// 	options: {
		// 		id: `${siteConfig.analytics.gtmId}`,

		// 		// Include GTM in development.
		// 		//
		// 		// Defaults to false meaning GTM will only be loaded in production.
		// 		includeInDevelopment: false,

		// 		// datalayer to be set before GTM is loaded
		// 		// should be an object or a function that is executed in the browser
		// 		//
		// 		// Defaults to null
		// 		defaultDataLayer: { platform: 'gatsby' }

		// 	}
		// },
		{
			resolve: 'gatsby-plugin-image'
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: `${__dirname}/data`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
				ignore: [`${__dirname}/src/images/**/*.svg`]
			}
		},
		{
			// Put SVGs used in React components in images/inline and process them with svg-react-loader
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /inline/
				}
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: `${siteConfig.title}`,
				short_name: `${siteConfig.titleShort}`,
				start_url: '/',
				background_color: fullConfig.theme.colors.white,
				theme_color: fullConfig.theme.colors.indigo['700'],
				display: 'browser',
				icon: `${siteConfig.logo}`
			}
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: fullConfig.theme.colors.indigo['700'],
				showSpinner: false
			}
		},
		{
			resolve: 'gatsby-plugin-postcss'
		},
		{
			resolve: 'gatsby-plugin-sharp'
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: `${siteConfig.url}`,
				sitemap: null,
				policy: [{ userAgent: '*', allow: '/' }]
			}
		},
		{
			resolve: 'gatsby-transformer-sharp'
		}
	]
};
