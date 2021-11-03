import React from 'react';

import Layout from '~/components/layout/layout';
import Seo from '~/components/util/seo';

const IndexPage = () => {
	return (
		<Layout>
			<Seo
				title=""
				keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
			/>
		</Layout>
	);
};

export default IndexPage;

