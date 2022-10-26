import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export type PageHeadProps = {
	location: Location;
	description: string;
	keywords: Array<string>;
	title: Required<string>;
};

const PageHead = ({
	location,
	description,
	keywords,
	title
}: PageHeadProps) => {
	const { site } = useStaticQuery(graphql`
		query DefaultPageHeadQuery {
			site {
				siteMetadata {
					title
					description
					author
					ogImage
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
			{site.siteMetadata?.ogImage &&
				<meta property="og:image" content={site.siteMetadata?.ogImage} />
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
							"url": "https://${process.env.HOST}${location?.pathname}",
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

export default PageHead;
