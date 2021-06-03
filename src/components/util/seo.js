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
			<meta property="description" content={metaDescription} />
			{keywords.length > 0
				? (
					<meta property="keywords" content={`${keywords.join(', ')}`} />
				) : null
			}

			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={metaDescription} />
			{site.siteMetadata?.image &&
				<meta property="og:image" content={site.siteMetadata?.image} />
			}
			<meta property="og:type" content="website" />

			<meta property="twitter:card" content="summary" />
			<meta property="twitter:creator" content={site.siteMetadata?.author} />
			<meta property="twitter:title" content={pageTitle} />
			<meta property="twitter:description" content={metaDescription} />

			<script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
			<script>
				{`
					setTimeout(() => {
						try {
							Weglot.initialize({
								api_key: 'wg_5c2552292c35131fb65327a70282cb054'
							});
						} catch {}
					}, 1000);
				`}
			</script>
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
