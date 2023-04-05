import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Icon from '~/components/modules/icon';

import routes from '~/data/routes.json';

const Navbar = ({ position }) => {
	const [isExpanded, toggleExpansion] = useState(false);

	const { site } = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div
			className={`
				flex flex-wrap items-center justify-between container p-4
				${position === 'PINNED' ? 'md:py-4' : 'md:py-6'}
			`}
		>
			<Link
				to="/"
				className="flex items-center"
			>
				<Icon
					iconImage="mdi:robot"
					sizeClasses={position === 'PINNED' ? 'w-10 h-10' : 'w-12 h-12'}
					className="mr-1"
				/>
				<h1
					className={`
						text-gray-800 font-bold no-underline
						${position === 'PINNED' ? 'text-lg' : 'text-2xl'}
					`}
				>
					{site.siteMetadata.title}
				</h1>
			</Link>

			<button
				className={`
					block md:hidden px-3 py-2 transition-colors hover:text-indigo-700 focus:text-indigo-700
					${isExpanded ? 'text-indigo-700' : 'text-gray-800'}
				`}
				onClick={() => toggleExpansion(!isExpanded)}
			>
				<svg
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					className={`
						block w-5 h-5 fill-current transition-transform
						${isExpanded ? `transform-gpu rotate-180` : ``}
					`}
				>
					<title>Menu</title>
					<rect
						y="3"
						width="20"
						height="2"
						className={`
							transition
							${isExpanded ? `transform-gpu rotate-45 translate-y-[0] translate-x-[6px]` : ``}
						`}
					/>
					<rect
						y="9"
						width="20"
						height="2"
						className={`
							transition
							${isExpanded ? `opacity-0` : ``}
						`}
					/>
					<rect
						y="15"
						width="20"
						height="2"
						className={`
							transition
							${isExpanded ? `transform-gpu -rotate-45 translate-y-[6px] translate-x-[-8px]` : ``}
						`}
					/>
				</svg>
			</button>

			<nav
				className={`
					md:flex md:items-center md:gap-6 w-full md:w-auto pt-2 md:pt-0
					${isExpanded ? 'block' : 'hidden'}
				`}
			>
				{routes.map(link => (
					<Link
						className="block md:inline-block px-4 py-2 md:p-2 text-gray-800 no-underline border-b-2 border-transparent transition-colors hover:text-indigo-700 focus:text-indigo-700"
						key={link.title}
						to={link.route}
					>
						{link.title}
					</Link>
				))}
			</nav>
		</div>
	);
};

export default Navbar;
