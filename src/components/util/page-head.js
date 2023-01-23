import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const PageHead = ({
	location,
	description,
	keywords,
	title
}) => {
	const { site } = useStaticQuery(graphql`
		query DefaultPageHeadQuery {
			site {
				siteMetadata {
					title
					description
					author
					image
				}
			}
		}
	`);

	const defaultTitle = site.siteMetadata?.title;
	const pageTitle = title || defaultTitle;
	const metaDescription = description || site.siteMetadata?.description;

	return (
		<>
			<title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
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
			<script type="application/ld+json">
				{`
						{
							"@context": "https://schema.org",
							"@type": "WebPage",
							"url": "${process.env.HOST}${location?.pathname}",
							"legalName": "${defaultTitle}",
							"name": "${pageTitle}",
							"about": "${metaDescription}",
							"brand": "${defaultTitle}"
						}
				`}
			</script>
		</>
	);
};

PageHead.defaultProps = {
	keywords: [],
	meta: []
};

PageHead.propTypes = {
	description: PropTypes.string,
	keywords: PropTypes.arrayOf(PropTypes.string),
	meta: PropTypes.array,
	title: PropTypes.string.isRequired
};

export default PageHead;
