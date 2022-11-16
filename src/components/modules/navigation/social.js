import React from 'react';

import Icon from '~/components/modules/icon';

import site from '~/data/site.json';

const NavSocial = () => {
	const socials = site.social;

	return (
		<nav className="flex justify-self-end">
			{socials.map((data, index) => {
				function Icons(param) {
					switch(param) {
					case 'facebook':
						return <Icon
							iconImage="fa-brands:facebook-f"
							sizeClasses="w-4 h-4"
						/>;
					case 'instagram':
						return <Icon
							iconImage="fa-brands:instagram"
							sizeClasses="w-4 h-4"
						/>;
					case 'twitter':
						return <Icon
							iconImage="fa-brands:twitter"
							sizeClasses="w-4 h-4"
						/>;
					default:
						return '';
					}
				}
				return (
					<a
						key={`${index}`}
						href={data.url}
						target="_blank"
						className="px-4 py-5 transition-colors hover:text-gray-900 focus:text-gray-900"
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
