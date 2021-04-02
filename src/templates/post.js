import React from 'react';
import { StructuredText } from 'react-datocms';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/layout/layout';
import Figure from '../components/modules/figure';

function PostPage({ data }) {
	const { title, excerpt, image, content } = data.datoCmsBlogPost;
	return(
		<Layout>
			<article className="px-4">
				<HelmetDatoCms seo={data.seoMetaTags} />
				<div className="my-8">
					<h1 className="mb-4 text-5xl font-bold">{title}</h1>
					<p className="text-xl text-gray-500">{excerpt}</p>

					<Figure title={image.title} alt={image.alt}>
						<GatsbyImage image={image.gatsbyImageData} alt={image.alt} />
					</Figure>
				</div>

				<section className="prose prose-sm md:prose-lg lg:prose-xl prose-indigo mx-auto">
					<StructuredText
						data={content}
						renderInlineRecord={({ record }) => {
							const { slug, title, name } = record;
							switch (record.__typename) {
								case 'DatoCmsBlogPost':
									return <p><a href={`/posts/${slug}`}>{title}</a></p>
								case 'DatoCmsBlogCategory':
									return <p><a href={`/posts/category/${slug}`}>{name}</a></p>
								default:
									return null
							}
						}}
						renderLinkToRecord={({ record, children }) => {
							const { slug } = record;
							switch (record.__typename) {
								case 'DatoCmsBlogPost':
									return <a href={`/posts/${slug}`} className="!text-red-700">{children}</a>
								case 'DatoCmsBlogCategory':
									return <a href={`/posts/category/${slug}`}>{children}</a>
								default:
									return null
							}
						}}
						renderBlock={({ record }) => {
							switch (record.__typename) {
								case 'DatoCmsImage': {
									const { title, alt, gatsbyImageData } = record.image;
									return (
										<Figure title={title} alt={alt}>
											<GatsbyImage image={gatsbyImageData} alt={alt} imgClassName="!my-0" />
										</Figure>
									)
								}
								default:
									return null
							}
						}}
					/>
				</section>
			</article>
		</Layout>
	)
}

export const query = graphql`
	query PostQuery($slug: String!) {
		datoCmsBlogPost(slug: { eq: $slug }) {
			seoMetaTags {
				...GatsbyDatoCmsSeoMetaTags
			}
			title
			excerpt
			image {
				alt
				title
				gatsbyImageData(width: 1280, placeholder: BLURRED, forceBlurhash: false)
			}
			content {
				value
				blocks {
					__typename
					... on DatoCmsImage {
						id: originalId
						image {
							alt
							title
							gatsbyImageData(width: 1280, placeholder: BLURRED, forceBlurhash: false)
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
`

export default PostPage
