import React, { useEffect, useContext } from 'react';
import * as Scroll from 'react-scroll';

import Icon from '~/components/modules/icon';

import { globalContext } from '~/components/util/provider';

export interface IAnchor {
	id: string;
	name: string;
	hidden?: boolean;
}

export type NavPageProps = {
	anchors: IAnchor[];
};

const NavPage = ({ anchors }: NavPageProps) => {
	const context = useContext(globalContext);
	const ScrollLink = Scroll.Link;

	useEffect(() => {
		let activeNav = document.querySelectorAll(`#page-nav a[href="#${context?.activeSection}"]`);
		if (activeNav.length !== 1) {
			activeNav = document.querySelectorAll(`#page-nav a[href="#top"]`);
		}
		setTimeout(() => {
			activeNav[0].scrollIntoView({
				behavior: 'smooth',
				inline: 'center',
				block: 'nearest'
			});
		}, 250);
	}, [context]);

	return (
		<nav
			id="page-nav"
			className="lg:flex whitespace-nowrap overflow-x-auto overflow-y-hidden justify-center items-center sticky top-0 z-30 p-1 py-2 bg-white border-b border-gray-200"
		>
			<ScrollLink
				href="#top"
				to="top"
				smooth={true}
				offset={0}
				duration={0}
				onClick={() => {context?.setActiveSection(''); }}
				className="group inline-block px-4 py-1.5 font-bold text-gray-800 transition hover:text-indigo-700 focus:text-indigo-700 align-middle"
			>
				<span className="sr-only">To the top!</span>
				<Icon
					iconImage="mdi:arrow-collapse-up"
					sizeClasses="w-3 h-3"
					className="transition group-hover:translate-y-[-0.125rem] group-focus:translate-y-[-0.125rem]"
				/>
			</ScrollLink>
			{anchors.map(anchor => (
				<ScrollLink
					key={anchor.name}
					href={`#${anchor.id}`}
					to={anchor.id}
					isDynamic={true}
					hashSpy={false}
					spy={false}
					smooth={true}
					offset={-75}
					duration={250}
					onClick={() => { context?.setActiveSection(anchor.id); }}
					className={`
						inline-block px-4 py-1 mr-2 text-sm rounded-full transition-colors hover:bg-indigo-700 hover:text-white focus:bg-indigo-700 focus:text-white
						${context && context.activeSection === anchor.id ? 'bg-indigo-800 text-white' : 'text-gray-800'}
						${anchor.hidden ? 'hidden' : ''}
					`}
				>
					{anchor.name}
				</ScrollLink>
			))}
		</nav>
	);
};

export default NavPage;
