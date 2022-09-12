import React from 'react';

import Layout from '~/components/layout/layout';
import PageHead from '~/components/util/page-head';
import ContactForm from '~/components/modules/form';

export function Head({ location }) {
	return (
		<PageHead
			location={location}
			title="Contact"
			keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
		/>
	);
}

const ContactPage = () => {
	return (
		<Layout>
			<div className="bg-gray-100 py-6 px-4 mb-6 text-center">
				<h1 className="text-4xl font-bold mb-3">Contact</h1>
			</div>

			<section className="container px-4">
				<ContactForm />
			</section>
		</Layout>
	);
};

export default ContactPage;
