import React from 'react';

import Button from '~/components/modules/button';

const Card = ({
	className,
	image,
	info,
	footer
}) => {
	return (
		<div
			className={`
				relative flex flex-wrap flex-col bg-clip-border break-words bg-white border border-gray-100 shadow-lg
				${className ?? ''}
			`}
		>
			{image}
			{info}
			{footer}
		</div>
	);
};

export const CardImage = ({
	image,
	alt
}) => {
	return (
		<div className="w-full">
			<img
				src={image}
				alt={alt}
				className="w-full h-auto"
			/>
		</div>
	);
};

export const CardInfo = ({
	children
}) => {
	return (
		<div className="flex-auto p-4 md:px-6 lg:px-8">
			{children}
		</div>
	);
};

export const CardTitle = ({
	children,
	className
}) => {
	return (
		<h3
			className={`
				text-2xl font-bold
				${className ?? ''}
			`}
		>
			{children}
		</h3>
	);
};

export const CardButton = ({
	children,
	className,
	onClick
}) => {
	return (
		<Button
			as="button"
			variant="primary"
			className={className ?? ''}
			onClick={onClick}
		>
			{children}
		</Button>
	);
};

export const CardFooter = ({
	children
}) => {
	return (
		<div className="py-2 px-4 md:px-6 lg:px-8 bg-gray-100">
			{children}
		</div>
	);
};

Card.Image = CardImage;
Card.Button = CardButton;
Card.Info = CardInfo;
Card.Title = CardTitle;
Card.Footer = CardFooter;

export default Card;
