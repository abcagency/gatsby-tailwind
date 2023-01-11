import React from 'react';
import { provider } from '~/components/util/provider';
import Wrapper from '~/components/layout/page-wrapper';

import './src/styles/global.css';

export const wrapRootElement = provider;

export const wrapPageElement = ({ element, props }) => {
	return <Wrapper {...props}>{element}</Wrapper>;
};
