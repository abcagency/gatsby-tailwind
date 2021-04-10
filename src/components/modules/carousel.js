import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import arrowLeftDropCircle from '@iconify/icons-mdi/arrow-left-drop-circle';
import arrowRightDropCircle from '@iconify/icons-mdi/arrow-right-drop-circle';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextButton = props => {
	const { className, style, onClick } = props;
	return (
		<button
			className={`${className} !right-1.5 z-10 opacity-60 hover:focus:!opacity-95 transition-opacity`}
			style={{ ...style, display: 'block' }}
			onClick={onClick}
		>
			<Icon icon={arrowRightDropCircle} height="1.5rem" width="1.5rem" color="#fff" />
			<span className={'sr-only'}>Next slide</span>
		</button>
	);
};

const PrevButton = props => {
	const { className, style, onClick } = props;
	return (
		<button
			className={`${className} !left-1.5 z-10 opacity-60 hover:focus:opacity-95 transition-opacity`}
			style={{ ...style, display: 'block' }}
			onClick={onClick}
		>
			<Icon icon={arrowLeftDropCircle} height="1.5rem" width="1.5rem" color="#fff" />
			<span className={'sr-only'}>Previous slide</span>
		</button>
	);
};

const Carousel = props => {
	const { content } = props;

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextButton />,
		prevArrow: <PrevButton />
	};

	return (
		<>
			<style>{`.slick-arrow::before { display: none; visibility: hidden; }`}</style>
			<Slider {...settings}>
				{content.map(slide => (
					<div key={slide.id}>
						{
							<>
								<h2 className="text-lg text-center p-2 bg-gray-800 text-white">{slide.title}</h2>
								<GatsbyImage image={slide.image.gatsbyImageData} alt="" />
							</>
						}
					</div>
				))}
			</Slider>
		</>
	);
};

export default Carousel;
