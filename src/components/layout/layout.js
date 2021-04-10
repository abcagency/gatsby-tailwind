import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
	return (
		<div className="relative dark:bg-gray-800 dark:text-white" id="top">
			<Header />

			<main>
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
