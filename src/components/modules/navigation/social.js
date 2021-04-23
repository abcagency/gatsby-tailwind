import React from 'react';
import { Icon } from '@iconify/react';
import facebook from '@iconify/icons-fa-brands/facebook';
import instagram from '@iconify/icons-fa-brands/instagram';
import twitter from '@iconify/icons-fa-brands/twitter';

import site from '~/data/site.json';

function NavSocial() {
	const socials = site.social;

	return (
		<nav className="flex justify-self-end">
			{socials.map((data, index) => {
				function Icons(param) {
					switch(param) {
					case 'facebook':
						return <Icon icon={facebook} height="1rem" width="1rem" />;
					case 'instagram':
						return <Icon icon={instagram} height="1rem" width="1rem" />;
					case 'twitter':
						return <Icon icon={twitter} height="1rem" width="1rem" />;
					default:
						return '';
					}
				}
				return (
					<a
						key={`${index}`}
						className=" hover:text-gray-900 dark:hover:text-gray-200 transition-colors px-4 py-5"
						href={data.url}
					>
						<span className="sr-only">{data.label}</span>

						{Icons(data.icon)}
					</a>
				);
			})}
		</nav>
	);
}

export default NavSocial;
