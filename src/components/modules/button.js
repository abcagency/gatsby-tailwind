import React, { forwardRef } from 'react';
import { Link } from 'gatsby';
import * as Scroll from 'react-scroll';

import Icon from '~/components/modules/icon';

// Notes:
// Button with a variant of 'link' should not contain a <Button.Body>.

const ButtonVariant = {
	primary: 'bg-blue-600 text-white hover:bg-blue-800 focus:bg-blue-800',
	secondary: 'bg-pink-600 text-white hover:bg-pink-800 focus:bg-pink-800',
	link: `!inline normal-case text-blue-600 font-normal [font-size:inherit] !p-0 rounded-none`
};

const ButtonSize = {
	sm: 'py-1 px-4 text-sm',
	lg: 'py-4 px-10 text-lg'
};

const ButtonDefaults = {
	style: 'font-bold uppercase text-center rounded transition-colors',
	size: 'py-2 px-6',
	variant: ButtonVariant.primary,
	block: 'block w-full'
};

const underlineClasses = "!underline hover:!no-underline focus:!no-underline";

const buttonClasses = (variant, size, isBlock, hasUnderline, className) => (`
	${isBlock ? ButtonDefaults.block : 'inline-block'}
	${ButtonDefaults.style}
	${variant ? ButtonVariant[variant] : ButtonDefaults.variant}
	${size ? ButtonSize[size] : ButtonDefaults.size}
	${hasUnderline ? underlineClasses : ''}
	${className ?? ''}
`);

const Button = ({
	children
}) => {
	return (
		{ children }
	);
};

export const Anchor = ({
	children,
	to,
	className,
	size,
	variant,
	isBlock,
	hasUnderline,
	...rest
}) => {
	return (
		<a
			href={to}
			target="_blank"
			className={buttonClasses(variant, size, isBlock, hasUnderline, className)}
			{...rest}
		>
			{children}
		</a>
	);
};

export const AnchorLink = ({
	children,
	to,
	className,
	size,
	variant,
	isBlock,
	hasUnderline,
	...rest
}) => {
	return (
		<Link
			to={to}
			className={buttonClasses(variant, size, isBlock, hasUnderline, className)}
			{...rest}
		>
			{children}
		</Link>
	);
};

export const ScrollAnchor = ({
	children,
	to,
	className,
	size,
	variant,
	isBlock,
	hasUnderline,
	...rest
}) => {
	let ScrollLink = Scroll.Link;

	return (
		<ScrollLink
			href={`#${to}`}
			to={to}
			smooth={true}
			offset={-25}
			duration={250}
			className={buttonClasses(variant, size, isBlock, hasUnderline, className)}
			{...rest}
		>
			{children}
		</ScrollLink>
	);
};

export const Btn = forwardRef((props, ref) => {
	const {
		children,
		type = 'button',
		className,
		size,
		variant,
		isBlock,
		hasUnderline,
		...rest
	} = props;
	return (
		<button
			ref={ref}
			type={type}
			className={buttonClasses(variant, size, isBlock, hasUnderline, className)}
			{...rest}
		>
			{children}
		</button>
	);
});

export const ButtonBody = ({
	children,
	className
}) => {
	return (
		<span className={`
			inline-flex w-full items-center justify-between gap-1.5
			${className ?? ''}
		`}>
			{children}
		</span>
	);
};

export const ButtonIcon = ({
	icon,
	sizeClasses = 'w-4 h-4',
	className
}) => {
	return (
		<Icon
			icon={icon}
			sizeClasses={sizeClasses}
			className={className ?? ''}
		/>
	);
};

Button.Anchor = Anchor;
Button.AnchorLink = AnchorLink;
Button.ScrollAnchor = ScrollAnchor;
Button.Btn = Btn;
Button.Body = ButtonBody;
Button.Icon = ButtonIcon;

Btn.displayName = 'Button:Button';
export default Button;
