import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Disclosure, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import chevronDown from '@iconify/icons-mdi/chevron-down';

import Layout from '../components/layout/layout';
import Seo from '../components/util/seo';
import Carousel from '../components/modules/carousel';
import Content from '../components/util/content';
import Accordion from '../components/modules/accordion';

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<Seo
				keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
				title="Home"
			/>

			<div className="bg-gray-100 dark:bg-gray-700 py-20 px-4 text-center">
				<div className="container mx-auto">
					<h1 className="text-6xl font-bold mb-6">{data.datoCmsHomepage.jumbotron}</h1>
					<div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.usp }} className="text-gray-700 dark:text-gray-300" />
				</div>
			</div>

			<div id="carousel">
				<Carousel content={data.datoCmsHomepage.sections} />
			</div>

			<div className="mt-36 max-w-3xl mx-auto">
				<h2 className="mb-6 text-center text-4xl font-bold text-gray-900 dark:text-gray-400">Frequently Asked Questions</h2>

				<Accordion content={data.datoCmsHomepage.accordion} />
			</div>

			<section className="mt-36 max-w-3xl mx-auto">
				<h2 className="mb-4 text-center text-4xl font-bold text-gray-900 dark:text-gray-400">Recent posts</h2>
				<ol>
					{data.allDatoCmsBlogPost.edges.map(({ node: blogPost }) => (
						<li key={blogPost.id} className="py-6 mb-6 border-b border-gray-200 dark:border-gray-700 px-4">
							<Link
								to={`/posts/${blogPost.slug}`}
								className="block"
							>
								<GatsbyImage
									image={blogPost.image.gatsbyImageData}
									alt={blogPost.image.alt}
								/>
								<Content className="mt-4 dark:text-gray-400">
									<h3 className="text-xl mb-4 dark:!text-white">{blogPost.title}</h3>
									<p>{blogPost.excerpt}</p>
								</Content>
							</Link>
						</li>
					))}
				</ol>
			</section>
		</Layout>
	);
};

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
			accordion {
				... on DatoCmsAccordionitem {
					model { apiKey }
					id
					heading
					content
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
