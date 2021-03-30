import React, { Component } from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import arrowLeftDropCircle from "@iconify/icons-mdi/arrow-left-drop-circle";
import arrowRightDropCircle from "@iconify/icons-mdi/arrow-right-drop-circle";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextButton(props) {
	const { className, style, onClick } = props;
	return (
		<button
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		>
			<Icon icon={arrowRightDropCircle} height="1rem" width="1rem" color="#666" />
		</button>
	);
 }

 function PrevButton(props) {
	const { className, style, onClick } = props;
	return (
		<button
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		>
			<Icon icon={arrowLeftDropCircle} height="1rem" width="1rem" color="#666" />
		</button>
	);
 }

export default class Carousel extends Component {
	render() {
		const { content } = this.props;

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
				<Slider {...settings}>
					{content.map((slide) => (
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
	}
 }
