import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '~/components/layout/layout';
import Figure from '~/components/modules/figure';
import StructuredTextStandard from '~/components/modules/structured-text-standard';

const PostPage = ({ data }) => {
	const { title, excerpt, image, content } = data.datoCmsBlogPost;
	return(
		<Layout>
			<article className="px-4">
				<HelmetDatoCms seo={data.seoMetaTags} />
				<div className="prose prose-sm md:prose-lg lg:prose-xl prose-indigo mx-auto mt-8 mb-4">
					<h1 className="text-5xl font-bold dark:!text-white">{title}</h1>
					<p className="text-gray-400">{excerpt}</p>
				</div>

				<Figure title={image.title} alt={image.alt} className="mb-10">
					<GatsbyImage image={image.gatsbyImageData} alt={image.alt} />
				</Figure>

				<section className="prose prose-sm md:prose-lg lg:prose-xl prose-indigo mx-auto dark:text-white">
					<StructuredTextStandard content={content} />
				</section>
			</article>
		</Layout>
	);
};

export const query = graphql`
	query PostQuery($slug: String!) {
		datoCmsBlogPost(slug: { eq: $slug }) {
			seoMetaTags {
				...GatsbyDatoCmsSeoMetaTags
			}
			title
			excerpt
			image {
				...imageFields
			}
			content {
				value
				blocks {
					__typename
					... on DatoCmsImage {
						id: originalId
						image {
							...imageFields
						}
					}
				}
				links {
					__typename
					... on DatoCmsBlogPost {
						id: originalId
						slug
						title
					}
					... on DatoCmsBlogCategory {
						id: originalId
						slug
						name
					}
				}
			}
		}
	}

	fragment imageFields on DatoCmsFileField {
		alt
		title
		gatsbyImageData(width: 1280, placeholder: BLURRED, forceBlurhash: false)
	}
`;

export default PostPage;
