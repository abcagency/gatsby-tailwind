import React from 'react';
import * as Scroll from 'react-scroll';
import { Icon } from '@iconify/react';

import NavSocial from '~/components/modules/navigation/social';
import site from '~/data/site.json';

const Footer = () => {
	const ScrollLink = Scroll.Link;

	return (
		<footer className="px-4 py-1 mt-4 bg-gray-100 text-gray-700 text-center text-xs">
			<div className="container flex justify-between items-center">
				<p className="m-0">
					© {new Date().getFullYear()}. <a href={`${site.copyright.url}`} target="_blank">{site.copyright.name}</a>
				</p>

				<div className="flex">
					<NavSocial />

					<ScrollLink
						className="px-4 py-5 transition-colors hover:text-gray-900 focus:text-gray-900"
						href="#top"
						to="top"
						smooth={true}
						offset={-25}
						duration={250}
					>
						<span className="sr-only">To the top!</span>
						<Icon icon="mdi:arrow-collapse-up" className="w-4 h-4" />
					</ScrollLink>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
