import React, { forwardRef } from 'react';
import { Link } from 'gatsby';
import * as Scroll from 'react-scroll';

import Icon from '~/components/modules/icon';

const IconPlacement = Object.freeze({
	BEFORE: 'before',
	AFTER: 'after'
});

const Button = forwardRef((props, ref) => {
	const {
		as = 'link',
		to,
		type,
		size,
		variant,
		children,
		className,
		buttonIconContainerClass,
		icon,
		iconPlacement = 'after',
		iconClassName,
		hasUnderline,
		...rest
	} = props;

	let ScrollLink = Scroll.Link;

	const Defaults = {
		size: 'py-2 px-6',
		variant: 'inline-block font-bold uppercase text-center rounded transition-colors',
		type: 'button'
	};

	const ButtonVariant = {
		primary: 'bg-blue-600 text-white hover:bg-blue-800 focus:bg-blue-800',
		secondary: 'bg-pink-600 text-white hover:bg-pink-800 focus:bg-pink-800',
		link: `normal-case text-blue-600 font-normal [font-size:inherit] !p-0 ${hasUnderline ? underlineClasses : ''}`
	};

	const ButtonSize = {
		sm: 'py-1 px-4 text-sm',
		lg: 'py-4 px-10 text-lg'
	};

	const underlineClasses = "!underline hover:!no-underline focus:!no-underline";

	const linkVariant = variant === 'link';

	const ButtonIcon = <Icon
		icon={icon}
		sizeClasses={linkVariant ? 'w-3.5 h-3.5' : 'w-4 h-4'}
		className={iconClassName ?? ''}
	/>;

	const ButtonBody =
		<>
			{icon ?
				<span className={`
					inline-flex items-center justify-between text-left
					${linkVariant ? 'inline-flex' : 'flex'}
					${buttonIconContainerClass ?? ''}
				`}>
					{iconPlacement === IconPlacement.BEFORE &&
						ButtonIcon
					}
					<span
						className={`
							flex-1
							${iconPlacement === IconPlacement.BEFORE ? 'pl-1.5' : 'pr-1.5'}
						`}
					>
						{children}
					</span>
					{iconPlacement === IconPlacement.AFTER &&
						ButtonIcon
					}
				</span>
				:
				children
			}
		</>;

	switch (as.toLowerCase()) {
	case 'a':
		return (
			<a
				href={to}
				target="_blank"
				className={`!no-underline
					${size ? ButtonSize[size] : Defaults.size}
					${Defaults.variant}
					${variant ? ButtonVariant[variant] : ''}
					${className ?? ''}
				`}
				{...rest}
			>
				{ButtonBody}
			</a>
		);
	case 'button':
		return (
			<button
				ref={ref}
				type={type ? type : Defaults.type}
				className={`
					${size ? ButtonSize[size] : Defaults.size}
					${Defaults.variant}
					${variant ? ButtonVariant[variant] : ''}
					${className ?? ''}
				`}
				{...rest}
			>
				{ButtonBody}
			</button>
		);
	case 'scroll':
		return (
			<ScrollLink
				href={`#${to}`}
				to={to}
				smooth={true}
				offset={-25}
				duration={250}
				className={`
					${size ? ButtonSize[size] : Defaults.size}
					${Defaults.variant}
					${variant ? ButtonVariant[variant] : ''}
					${className ?? ''}
				`}
				{...rest}
			>
				{ButtonBody}
			</ScrollLink>
		);
	default:
		return (
			<Link
				to={to}
				className={`
					${size ? ButtonSize[size] : Defaults.size}
					${Defaults.variant}
					${variant ? ButtonVariant[variant] : ''}
					${className ?? ''}
				`}
				{...rest}
			>
				{ButtonBody}
			</Link>
		);
	}
});

Button.displayName = 'Button';
export default Button;
