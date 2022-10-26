import React from 'react';

const SkipLink = ({ to, className, children }) => {
	return (
		<a
			href={to}
			className={`sr-only focus:not-sr-only inline-block py-2 px-6 bg-gray-900 text-white font-bold text-center rounded transition-colors hover:bg-gray-700 ${className}`}
		>
			{children}
		</a>
	);
};

SkipLink.defaultProps = {
	children: 'Skip to content',
	className: '',
	to: '#start-of-content'
};

export default SkipLink;
