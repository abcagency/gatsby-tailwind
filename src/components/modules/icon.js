import React from 'react';
import { Icon } from '@iconify/react';

const IconContained = ({
	className,
	sizeClasses,
	iconImage,
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
				icon={iconImage}
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
