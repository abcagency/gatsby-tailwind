import React from 'react';
import { StructuredText } from 'react-datocms';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Figure from './figure';

const StructuredTextStandard = ({ content }) => {
	return (
		<StructuredText
			data={content}
			renderInlineRecord={({ record }) => {
				const { slug, title, name } = record;
				switch (record.__typename) {
				case 'DatoCmsBlogPost':
					return <Link
						to={`/posts/${slug}`}
						className="!text-red-700"
					>
						{title}
					</Link>;
				case 'DatoCmsBlogCategory':
					return <Link
						to={`/posts/category/${slug}`}
						className="!text-red-700"
					>
						{name}
					</Link>;
				default:
					return null;
				}
			}}
			renderLinkToRecord={({ record, children }) => {
				const { slug } = record;
				switch (record.__typename) {
				case 'DatoCmsBlogPost':
					return <Link
						to={`/posts/${slug}`}
					>
						{children}
					</Link>;
				case 'DatoCmsBlogCategory':
					return <Link
						to={`/posts/category/${slug}`}
						className="!text-red-700"
					>
						{children}
					</Link>;
				default:
					return null;
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
					);
				}
				default:
					return null;
				}
			}}
		/>
	);
};

export default StructuredTextStandard;
