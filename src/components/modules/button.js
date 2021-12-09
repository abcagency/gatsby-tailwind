import React from 'react';
import { Link } from 'gatsby';

const Button = ({ as = 'link', to, type, size, variant, children, className, ...rest }) => {
	const Defaults = {
		size: 'py-2 px-6',
		variant: 'inline-block font-bold uppercase text-center rounded transition-colors',
		type: 'button'
	};

	const ButtonVariant = {
		primary: 'bg-blue-600 text-white hover:bg-blue-800 focus:bg-blue-800',
		secondary: 'bg-pink-600 text-white hover:bg-pink-800 focus:bg-pink-800'
	};

	const ButtonSize = {
		sm: 'py-1 px-4 text-sm',
		lg: 'py-4 px-10 text-lg'
	};

	switch (as.toLowerCase()) {
	case 'a':
		return (
			<a
				href={to}
				target="_blank"
				rel="nofollow noreferrer"
				className={`!no-underline
					${size ? ButtonSize[size] : Defaults.size}
					${Defaults.variant}
					${variant ? ButtonVariant[variant] : ''}
					${className ?? ''}
				`}
				{...rest}
			>
				{children}
			</a>
		);
	case 'button':
		return (
			<button
				type={type ? type : Defaults.type}
				className={`
					${size ? ButtonSize[size] : Defaults.size}
					${Defaults.variant}
					${variant ? ButtonVariant[variant] : ''}
					${className ?? ''}
				`}
				{...rest}
			>
				{children}
			</button>
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
				{children}
			</Link>
		);
	}
};

export default Button;
