import React from 'react';
import setupLocatorUI from '@locator/runtime';

const PageWrapper = ({ children }) => {
	if (process.env.NODE_ENV === 'development') {
		setupLocatorUI();
	}

	return (
		<>{children}</>
	);
};

export default PageWrapper;
