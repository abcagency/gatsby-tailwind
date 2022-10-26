import React, { ReactNode } from 'react';

import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import SkipLink from '~/components/modules/navigation/skip-link';

export type LayoutProps = {
	location: Location;
	children: Required<ReactNode>;
};

const Layout = ({
	children,
	location
}: LayoutProps) => {
	return (
		<div id="top" className="relative">
			<SkipLink />
			<Header location={location} />

			<main id="start-of-content">
				{children}
			</main>

			<Footer />
		</div>
	);
};

export default Layout;
