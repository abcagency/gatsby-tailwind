import React from 'react';
import { Icon } from '@iconify/react';

import site from '~/data/site.json';

const NavSocial = () => {
	const socials = site.social;

	return (
		<nav className="flex justify-self-end">
			{socials.map((data, index) => {
				function Icons(param) {
					switch(param) {
					case 'facebook':
						return <Icon icon="fa-brands:facebook-f" className="w-4 h-4" />;
					case 'instagram':
						return <Icon icon="fa-brands:instagram" className="w-4 h-4" />;
					case 'twitter':
						return <Icon icon="fa-brands:twitter" className="w-4 h-4" />;
					default:
						return '';
					}
				}
				return (
					<a
						key={`${index}`}
						className=" hover:text-gray-900 transition-colors px-4 py-5"
						href={data.url}
					>
						<span className="sr-only">{data.label}</span>

						{Icons(data.icon)}
					</a>
				);
			})}
		</nav>
	);
};

export default NavSocial;
