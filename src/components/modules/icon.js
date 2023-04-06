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
		<div
			className={`
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
		</div>
	);
};

export default IconContained;
