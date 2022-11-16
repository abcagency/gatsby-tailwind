import React, { useEffect, useContext } from 'react';
import * as Scroll from 'react-scroll';

import Icon from '~/components/modules/icon';

import { globalContext } from '~/components/util/provider';

const NavPage = ({ anchors }) => {
	const context = useContext(globalContext);
	const ScrollLink = Scroll.Link;

	useEffect(() => {
		let activeNav = document.querySelectorAll(`#page-nav a[href="#${context.activeSection}"]`);
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
			className="md:flex md:items-center md:justify-center md:gap-6 w-full md:w-auto sticky top-0 z-30 p-1 py-2 bg-white border-b border-gray-200"
		>
			<ScrollLink
				href="#top"
				to="top"
				smooth={true}
				offset={0}
				duration={0}
				onClick={() => {context.setActiveSection(''); }}
				className="block md:inline-block px-4 py-2 md:p-2 text-gray-800 no-underline transition-colors hover:text-indigo-700 focus:text-indigo-700"
			>
				<span className="sr-only">To the top!</span>
				<Icon
					iconImage="mdi:arrow-collapse-up"
					sizeClasses="w-4 h-4"
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
					onClick={() => { context.setActiveSection(anchor.id); }}
					className={`
						block md:inline-block px-4 py-2 md:p-2 no-underline transition-colors hover:text-indigo-700 focus:text-indigo-700
						${context && context.activeSection === anchor.id ? 'text-indigo-700' : 'text-gray-800'}
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
