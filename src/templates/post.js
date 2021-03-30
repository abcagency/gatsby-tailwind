import React from "react"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { StructuredText } from 'react-datocms';
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Figure from "../components/figure"

const PostPage = ({ data }) => (
  <Layout>
    <article className="px-8">
      <HelmetDatoCms seo={data.datoCmsBlogPost.seoMetaTags} />
      <div className="my-8">
        <h1 className="mb-4 text-5xl font-bold">{data.datoCmsBlogPost.title}</h1>
        <p className="text-xl text-gray-500">{data.datoCmsBlogPost.excerpt}</p>

			<Figure
				image={data.datoCmsBlogPost.image.gatsbyImageData}
				title={data.datoCmsBlogPost.image.title}
				alt={data.datoCmsBlogPost.image.alt}
			/>
      </div>

			<StructuredText
				data={data.datoCmsBlogPost.content}
				renderBlock={({ record }) => {
					switch (record.__typename) {
						case "DatoCmsImage":
							return (
								<Figure
									image={record.image.gatsbyImageData}
									title={record.image.title}
									alt={record.image.alt}
								/>
							)
						default:
							return null;
					}
				}}
			/>
    </article>
  </Layout>
)

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
			gatsbyImageData(
				width: 1280,
				placeholder: BLURRED,
				forceBlurhash: false
			)
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
					gatsbyImageData(
						width: 1280,
						placeholder: BLURRED,
						forceBlurhash: false
					)
            }
          }
        }
		}
    }
  }
`

export default PostPage
