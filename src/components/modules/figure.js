import React from 'react';

const Figure = ({ children, title, alt, className }) => {
	return (
		<figure className={`border border-gray-200 dark:border-gray-700 my-8 ${className}`}>
			<div className="pt-2 px-2">
				{children}
			</div>
			<figcaption className="border-t border-gray-200 dark:border-gray-700 p-2 text-center !text-sm !text-gray-600 dark:!text-gray-400 !mt-0">
				{title ? title : alt}
			</figcaption>
		</figure>
	);
};

export default Figure;
