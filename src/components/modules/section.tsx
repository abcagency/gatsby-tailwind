import React from 'react';
import { InView } from 'react-intersection-observer';

export type SectionProps = {
	children: string;
	className: Location;
	setCurrentSection: (sectionName: string, intersectionRatio: number, intersectionRatioHeight: number) => void;
};

export type Entry = {
	intersectionRatio: number;
	target: {
		id: string;
	};
	boundingClientRect: {
		height: number;
	};
};

const isBrowser = typeof window !== 'undefined';

const Section = ({
	children,
	className,
	setCurrentSection,
	...props
}: SectionProps) => {
	const onChange = (inView: boolean, entry: Entry) => {
		if (inView) {
			if (entry.intersectionRatio > 0 && setCurrentSection) {
				setCurrentSection(entry.target.id, entry.intersectionRatio, entry.intersectionRatio * entry.boundingClientRect.height / (isBrowser ? window.innerHeight : 1));
			}
		}
	};

	return (
		<InView
			as="section"
			threshold={[0, 0.025, 0.05, 0.1, 0.15, 0.2, 0.4, 0.45, 0.5, 0.55, 0.85, 0.9, 0.95, 0.975, 1]}
			onChange={onChange}
			className={`
				scroll-mt-6
				${className ?? ''}
			`}
			{...props}
		>
			{children}
		</InView>
	);
};

export default Section;
