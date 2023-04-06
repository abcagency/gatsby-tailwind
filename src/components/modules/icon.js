import React from 'react';
import { Icon } from '@iconify/react';

const IconContained = ({
	className,
	sizeClasses,
	icon,
	iconClasses,
	...iconProps
}) => {
	return (
		<span
			className={`
				inline-block
				${className ?? ''}
				${sizeClasses ?? ''}
			`}
		>
			<Icon
				icon={icon}
				className={`
					${iconClasses ?? ''}
					${sizeClasses ?? ''}
				`}
				{...iconProps}
			/>
		</span>
	);
};

export default IconContained;
