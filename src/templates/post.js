import React from 'react'
import { StructuredText } from 'react-datocms'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/layout'
import Figure from '../components/modules/figure'

function PostPage({ data }) {
	const blogPost = data.datoCmsBlogPost;
	return(
		<Layout>
			<article className="px-8">
				<HelmetDatoCms seo={data.seoMetaTags} />
				<div className="my-8">
					<h1 className="mb-4 text-5xl font-bold">{blogPost.title}</h1>
					<p className="text-xl text-gray-500">{blogPost.excerpt}</p>

					<Figure title={blogPost.image.title} alt={blogPost.image.alt}>
						<GatsbyImage image={blogPost.image.gatsbyImageData} alt={blogPost.image.alt} />
					</Figure>
				</div>

				<section className="prose prose-sm md:prose-lg lg:prose-xl prose-indigo mx-auto">
					<StructuredText
						data={blogPost.content}
						renderInlineRecord={({ record }) => {
							switch (record.__typename) {
								case 'DatoCmsBlogPost':
									return <a href={`/posts/${record.slug}`}>{record.title}</a>
								case 'DatoCmsBlogCategory':
									return <a href={`/posts/category/${record.slug}`}>{record.name}</a>
								default:
									return null
							}
						}}
						renderLinkToRecord={({ record, children }) => {
							switch (record.__typename) {
								case 'DatoCmsBlogPost':
									return <a href={`/posts/${record.slug}`}>{record.title}</a>
								case 'DatoCmsBlogCategory':
									return <a href={`/posts/category/${record.slug}`}>{record.name}</a>
								default:
									return null
							}
						}}
						renderBlock={({ record }) => {
							const image = record.image;
							switch (record.__typename) {
								case 'DatoCmsImage':
									return (
										<Figure title={image.title} alt={image.alt}>
											<GatsbyImage image={image.gatsbyImageData} alt={image.alt} imgClassName="!my-0" />
										</Figure>
									)
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
