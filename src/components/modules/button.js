import React from 'react';
import { Link } from 'gatsby';

function Button ({ link, to, size, variant, children, className, ...rest }) {
	const Defaults = {
		size: 'py-2 px-6',
		variant: 'inline-block font-bold uppercase text-center rounded transition-colors'
	};

	const ButtonVariant = {
		primary: 'bg-blue-600 text-white focus:hover:bg-blue-800',
		secondary: 'bg-pink-600 text-white focus:hover:bg-pink-800'
	};

	const ButtonSize = {
		sm: 'py-1 px-4 text-sm',
		lg: 'py-3 px-8 text-lg'
	};

	return (
		<>
			{link ?
				<Link
					to={to}
					className={`
						${size ? ButtonSize[size] : Defaults.size}
						${Defaults.variant}
						${variant ? ButtonVariant[variant] : ''}
						${className}
					`}
					{...rest}
				>
					{children}
				</Link>
				:
				<button
					type="button"
					className={`
						${size ? ButtonSize[size] : Defaults.size}
						${Defaults.variant}
						${variant ? ButtonVariant[variant] : ''}
						${className}
					`}
					{...rest}
				>
					{children}
				</button>
			}
		</>
	);
}

export default Button;
