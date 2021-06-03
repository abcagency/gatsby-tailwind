import React from 'react';

const Content = ({ children, className, tag }) => {
	let TagName = tag || 'div';

	return (
		<>
			<TagName
				className={`prose prose-sm md:prose-md lg:prose-lg xl:prose-xl prose-indigo mx-auto ${className}`}>
				{children}
			</TagName>
		</>
	);
};

export default Content;
