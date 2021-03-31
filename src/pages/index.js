import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Carousel from "../components/carousel";

const IndexPage = ({ data }) => (
	<Layout>
		<Seo
			keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
			title="Home"
		/>

		<div className="bg-gray-100 py-6 px-4 mb-4 text-center">
			<h1 className="text-4xl font-bold mb-3">{data.datoCmsHomepage.jumbotron}</h1>
			<div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.usp }} className="text-sm text-gray-600" />
		</div>

		<div id="carousel">
			<Carousel content={data.datoCmsHomepage.sections} />
		</div>

		<section className="mt-36 max-w-3xl mx-auto">
			<h2 className="mb-4 text-center text-2xl font-bold">Recent posts</h2>
			<ol>
				{data.allDatoCmsBlogPost.edges.map(({ node: blogPost }) => (
					<li key={blogPost.id} className="py-6 mb-6 border-b border-gray-200 px-4">
						<Link to={`/posts/${blogPost.slug}`} className="block">
							<GatsbyImage
								image={blogPost.image.gatsbyImageData}
								alt={blogPost.image.alt}
							/>
							<h3 className="text-xl mt-2 mb-4">{blogPost.title}</h3>
							<p>{blogPost.excerpt}</p>
						</Link>
					</li>
				))}
			</ol>
		</section>
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
							forceBlurhash: false,
							layout: FULL_WIDTH
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
              width: 736,
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
