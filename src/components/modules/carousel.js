import PropTypes from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Keyboard, Navigation, Pagination, Scrollbar } from 'swiper';
import { Icon } from '@iconify/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const NextButton = () => {
	return (
		<button
			className="next-btn absolute top-1/2 right-3.5 z-10 -translate-y-1/2 opacity-60 hover:opacity-95 focus:opacity-95 transition-opacity"
		>
			<Icon
				icon="mdi:arrow-right-drop-circle"
				className="text-white h-6 w-6"
			/>
			<span className="sr-only">Next slide</span>
		</button>
	);
};

const PrevButton = () => {
	return (
		<button
			className="prev-btn absolute top-1/2 left-1.5 z-10 -translate-y-1/2 opacity-60 hover:opacity-95 focus:opacity-95 transition-opacity"
		>
			<Icon
				icon="mdi:arrow-left-drop-circle"
				className="text-white h-6 w-6"
			/>
			<span className="sr-only">Previous slide</span>
		</button>
	);
};

const Carousel = ({
	name,
	children,
	className,
	...carouselSettings
}) => {
	SwiperCore.use([
		A11y,
		Keyboard,
		Navigation,
		Pagination,
		Scrollbar
	]);

	const settings = {
		autoHeight: true,
		keyboard: {
			'enabled': true
		},
		loop: true,
		navigation: {
			nextEl:'.next-btn',
			prevEl: 'prev-btn'
		},
		pagination: {
			clickable: true
		},
		scrollbar: {
			draggable: true
		},
		slidesPerView: 1,
		breakpoints: {
			640: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 3
			},
			1024: {
				slidesPerView: 4
			}
		}
	};

	return (
		<Swiper
			className={className ?? ''}
			{...settings}
			{...carouselSettings}
		>
			{children.map((slide, i) => (
				<SwiperSlide key={`${name}-carousel-${i}`}>
					{slide}
				</SwiperSlide>
			))}
			<PrevButton />
			<NextButton />
		</Swiper>
	);
};

Carousel.propTypes = {
	name: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired
};

export default Carousel;
