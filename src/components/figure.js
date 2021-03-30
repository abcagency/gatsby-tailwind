import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"

function Figure({ image, title, alt }) {
  return (
		<>
			<figure className="border border-gray-200 my-8 -mx-6">
				<div className="pt-2 px-2">
					<GatsbyImage image={image} alt="" />
				</div>
				<figcaption className="bg-gray-100 p-2 text-center text-gray-500 text-xs">
					{title ? title : alt}
				</figcaption>
			</figure>
		</>
  );
}

export default Figure;
