import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image"

function Figure({ content }) {
  return (
		<>
			<figure className="border border-gray-200 my-8 -mx-6">
				<div className="pt-2 px-2">
					<GatsbyImage image={content.image.gatsbyImageData} alt="" />
				</div>
				<figcaption className="bg-gray-100 p-2 text-center text-gray-500 text-xs">
					{content.image.title ? content.image.title : content.image.alt}
				</figcaption>
			</figure>
		</>
  );
}

Figure.propTypes = {
  content: PropTypes.node.isRequired
};

export default Figure;
