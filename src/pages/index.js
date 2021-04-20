import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-plugin-transition-link/AniLink';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Disclosure, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import chevronDown from '@iconify/icons-mdi/chevron-down';

import Layout from '../components/layout/layout';
import Seo from '../components/util/seo';
import Carousel from '../components/modules/carousel';
import Content from '../components/util/content';

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

				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button
								className="flex justify-between w-full p-4 font-bold text-left text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 hover:dark:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 transition-colors border-b border-white dark:border-gray-800"
							>
								<span>Lorem ipsum dolor sit amet?</span>
								<Icon
									icon={chevronDown}
									className={`!transform !translate-y-1 ${open ? "!rotate-180" : ""}`}
									height="1rem"
									width="1rem"
									aria-hidden="true"
								/>
							</Disclosure.Button>
							<Transition
								show={open}
								enter="transition duration-100 ease-out"
								enterFrom="transform scale-95 opacity-0"
								enterTo="transform scale-100 opacity-100"
								leave="transition duration-75 ease-out"
								leaveFrom="transform scale-100 opacity-100"
								leaveTo="transform scale-95 opacity-0"
							>
								<Disclosure.Panel
									static
									className="p-4"
								>
									Quisque ac vulputate quam. Nullam tempus velit sed vehicula pretium. Donec et auctor magna, at rhoncus magna. In non odio nibh. Duis suscipit velit dui, vitae accumsan turpis faucibus ac. Morbi ut ipsum sit amet mi rutrum ultrices. Nunc quis tellus id diam vehicula suscipit. Nulla a luctus ligula, euismod feugiat mi. Maecenas vestibulum nibh quis enim eleifend, at scelerisque lorem varius. Mauris eu pretium magna, ullamcorper dictum lorem. Mauris ante risus, egestas sit amet ante venenatis, ultrices pulvinar sem. Curabitur a nisi nec justo elementum lacinia eget ac magna.
								</Disclosure.Panel>
							</Transition>
						</>
					)}
				</Disclosure>

				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button
								className="flex justify-between w-full p-4 font-bold text-left text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 hover:dark:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 transition-colors border-b border-white dark:border-gray-800"
							>
								<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</span>
								<Icon
									icon={chevronDown}
									className={`!transform !translate-y-1 ${open ? "!rotate-180" : ""}`}
									height="1rem"
									width="1rem"
									aria-hidden="true"
								/>
							</Disclosure.Button>
							<Transition
								show={open}
								enter="transition duration-100 ease-out"
								enterFrom="transform scale-95 opacity-0"
								enterTo="transform scale-100 opacity-100"
								leave="transition duration-75 ease-out"
								leaveFrom="transform scale-100 opacity-100"
								leaveTo="transform scale-95 opacity-0"
							>
								<Disclosure.Panel
									static
									className="p-4"
								>
									Quisque ac vulputate quam. Nullam tempus velit sed vehicula pretium. Donec et auctor magna, at rhoncus magna. In non odio nibh. Duis suscipit velit dui, vitae accumsan turpis faucibus ac. Morbi ut ipsum sit amet mi rutrum ultrices. Nunc quis tellus id diam vehicula suscipit. Nulla a luctus ligula, euismod feugiat mi. Maecenas vestibulum nibh quis enim eleifend, at scelerisque lorem varius. Mauris eu pretium magna, ullamcorper dictum lorem. Mauris ante risus, egestas sit amet ante venenatis, ultrices pulvinar sem. Curabitur a nisi nec justo elementum lacinia eget ac magna.
								</Disclosure.Panel>
							</Transition>
						</>
					)}
				</Disclosure>
			</div>

			<section className="mt-36 max-w-3xl mx-auto">
				<h2 className="mb-4 text-center text-4xl font-bold text-gray-900 dark:text-gray-400">Recent posts</h2>
				<ol>
					{data.allDatoCmsBlogPost.edges.map(({ node: blogPost }) => (
						<li key={blogPost.id} className="py-6 mb-6 border-b border-gray-200 dark:border-gray-700 px-4">
							<Link
								to={`/posts/${blogPost.slug}`}
								className="block"
								hex="#1D4ED8"
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
