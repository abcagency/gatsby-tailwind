import React from 'react';

function Figure({ children, title, alt }) {
	return (
		<>
			<figure className="border border-gray-200 my-8">
				<div className="pt-2 px-2">
					{children}
				</div>
				<figcaption className="border-t border-gray-200 p-2 text-center !text-sm !text-gray-600 !mt-0">
					{title ? title : alt}
				</figcaption>
			</figure>
		</>
	);
}

export default Figure;
