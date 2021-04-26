import React from 'react';
import * as Scroll from 'react-scroll';
import { Icon } from '@iconify/react';
import arrowCollapseUp from '@iconify/icons-mdi/arrow-collapse-up';

import NavSocial from '~/components/modules/navigation/social';
import site from '~/data/site.json';

function Footer() {
	let ScrollLink = Scroll.Link;

	return (
		<footer className="px-4 py-1 mt-4 bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-400 text-center text-xs">
			<div className="container mx-auto flex justify-between items-center">
				<p className="m-0">
					© {new Date().getFullYear()}. <a href={`${site.copyright.url}`} target="_blank" rel="noreferrer noopener">{site.copyright.name}</a>
				</p>

				<div className="flex">
					<NavSocial />

					<ScrollLink
						className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors px-4 py-5"
						href="#top"
						to="top"
						smooth={true}
						offset={-25}
						duration={250}
					>
						<span className="sr-only">To the top!</span>
						<Icon icon={arrowCollapseUp} height="1rem" width="1rem" />
					</ScrollLink>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
