import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-plugin-transition-link/AniLink';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/layout/layout';
import Seo from '../components/util/seo';
import Carousel from '../components/modules/carousel';
import Content from '../components/util/content';

const IndexPage = ({ data }) => (
	<Layout>
		<Seo
			keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
			title="Home"
		/>

		<div className="bg-gray-100 py-20 px-4 text-center">
			<div className="container mx-auto">
				<h1 className="text-6xl font-bold mb-6">{data.datoCmsHomepage.jumbotron}</h1>
				<div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.usp }} className="text-gray-700" />
			</div>
		</div>

		<div id="carousel">
			<Carousel content={data.datoCmsHomepage.sections} />
		</div>

		<section className="mt-36 max-w-3xl mx-auto">
			<h2 className="mb-4 text-center text-4xl font-bold text-gray-900">Recent posts</h2>
			<ol>
				{data.allDatoCmsBlogPost.edges.map(({ node: blogPost }) => (
					<li key={blogPost.id} className="py-6 mb-6 border-b border-gray-200 px-4">
						<Link
							to={`/posts/${blogPost.slug}`}
							className="block"
							paintDrip
							hex="#1D4ED8"
						>
							<GatsbyImage
								image={blogPost.image.gatsbyImageData}
								alt={blogPost.image.alt}
							/>
							<Content className="mt-4">
								<h3 className="text-xl mb-4">{blogPost.title}</h3>
								<p>{blogPost.excerpt}</p>
							</Content>
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
