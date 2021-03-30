/* eslint-disable react/prop-types */
import React from "react";
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

			<div className="bg-gray-100 py-6 px-4 mb-2 text-center">
				<h1 className="text-4xl font-bold mb-3">{data.datoCmsHomepage.jumbotron}</h1>
				<div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.usp }} className="text-sm text-gray-600" />
			</div>

			{
				data.datoCmsHomepage.sections.map((block) => (
					<div key={block.id}>
						{
							block.model.apiKey === 'section' &&
								<section>
									<h2 className="text-lg mb-4">{block.title}</h2>
									<button type="button">{block.buttonText}</button>
									<GatsbyImage image={block.image.gatsbyImageData} alt={block.image.alt} />
								</section>
						}
					</div>
				))
			}

			<ol className="max-w-3xl mx-auto">
				{data.allDatoCmsBlogPost.edges.map(({ node: blogPost }) => (
					<li key={blogPost.id} className="py-6 mb-6 border-b border-gray-200 px-4">
						<Link to={`/posts/${blogPost.slug}`} className="block">
							<GatsbyImage image={blogPost.image.gatsbyImageData} alt={blogPost.image.alt} />
							<h3 className="text-2xl mt-2 mb-4">{blogPost.title}</h3>
							<p>{blogPost.excerpt}</p>
						</Link>
					</li>
				))}
			</ol>
    </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
		datoCmsHomepage {
			jumbotron
			usp
			sections {
				... on DatoCmsSection {
					model { apiKey }
					id
					title
					buttonText
					image {
						alt
						gatsbyImageData(
							width: 1280,
							placeholder: BLURRED,
							forceBlurhash: false
						)
					}
				}
			}
		}
    allDatoCmsBlogPost {
      edges {
        node {
          id
          slug
          title
          image {
						alt
            gatsbyImageData(
              width: 1280,
              placeholder: BLURRED,
              forceBlurhash: false
            )
          }
          excerpt
          categories {
            name
          }
        }
      }
    }
  }
`;
