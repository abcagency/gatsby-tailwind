import PropTypes from 'prop-types';
import React from 'react';

import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import SkipLink from '~/components/modules/navigation/skip-link';

const Layout = ({ children }) => {
	return (
		<div id="top" className="relative">
			<SkipLink />
			<Header />

			<main id="start-of-content">
				{children}
			</main>

			<Footer />
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
