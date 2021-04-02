import React from 'react';

function Content(props) {
	const { children, className, tag } = props;
	let TagName = tag || 'div';

	return (
		<>
			<TagName
				className={`prose prose-sm md:prose-lg lg:prose-xl prose-indigo mx-auto ${className}`}>
				{children}
			</TagName>
		</>
	);
}

export default Content;
