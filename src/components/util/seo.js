import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SEO = ({ description, lang, meta, keywords, title }) => {
	const { site } = useStaticQuery(graphql`
		query DefaultSEOQuery {
			site {
				siteMetadata {
					title
					description
					author
				}
			}
		}
	`);

	const defaultTitle = site.siteMetadata?.title;
	const pageTitle = title || defaultTitle;
	const metaDescription = description || site.siteMetadata?.description;

	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={title || defaultTitle}
			titleTemplate={title ? `%s | ${defaultTitle}` : null}
		>
			<meta name="description" content={metaDescription} />
			{keywords.length > 0
				? (
					<meta name="keywords" content={`${keywords.join(', ')}`} />
				) : null
			}

			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={metaDescription} />
			{site.siteMetadata?.image &&
				<meta property="og:image" content={site.siteMetadata?.image} />
			}
			<meta property="og:type" content="website" />

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content={site.siteMetadata?.author} />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={metaDescription} />
		</Helmet>
	);
};

SEO.defaultProps = {
	lang: 'en',
	keywords: [],
	meta: []
};

SEO.propTypes = {
	description: PropTypes.string,
	keywords: PropTypes.arrayOf(PropTypes.string),
	lang: PropTypes.string,
	meta: PropTypes.array,
	title: PropTypes.string.isRequired
};

export default SEO;
