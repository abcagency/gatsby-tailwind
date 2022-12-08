import React from 'react';
import { Icon } from '@iconify/react';

export type IconProps = {
	iconImage: string;
	className?: string;
	sizeClasses?: string;
	iconClasses?: string;
};

const IconContained = ({
	iconImage,
	className,
	sizeClasses,
	iconClasses,
	...iconProps
}: IconProps) => {
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
