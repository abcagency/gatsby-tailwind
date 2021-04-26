import PropTypes from 'prop-types';
import React from 'react';

import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';

function Layout({ children }) {
	return (
		<div id="top" className="relative dark:bg-gray-800 dark:text-white">
			<Header />

			<main>
				{children}
			</main>

			<Footer />
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
