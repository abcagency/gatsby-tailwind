import React from 'react';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';

function ArtDirectedImage({ primaryImage, altImages, alt, className }) {
	const alternates = altImages.sort((itemA, itemB) => itemA.media > itemB.media ? 1 : -1).map(item => (
		{
			media: `(max-width: ${item.media}px)`,
			image: getImage(item.image)
		}
	));

	const images = withArtDirection(getImage(primaryImage), alternates);
	console.log(alternates);
	return (
		<GatsbyImage
			image={images}
			alt={alt}
			className={`${className ? className : ''}`}
		/>
	);
}

export default ArtDirectedImage;

///////////////////////////
// USAGE
///////////////////////////
// <ArtDirectedImage
// 	primaryImage={data.myMainImage.childImageSharp.gatsbyImageData}
// 	altImages={[
// 		{
// 			media: 768,
// 			image: data.myChildImage.childImageSharp.gatsbyImageData
// 		},
// 		{
// 			media: 1024,
// 			image: data.myChildOtherImage.childImageSharp.gatsbyImageData
// 		}
// 	]}
// 	alt="image alt text"
// 	className=""
// />
