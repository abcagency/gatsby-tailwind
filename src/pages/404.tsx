import React from 'react';
import { Link } from 'gatsby';

import PageHead from '~/components/util/page-head';
import Layout from '~/components/layout/layout';
import Button from '~/components/modules/button';
import Icon from '~/components/modules/icon';

import abductionIllustration from '~/images/abduction-illustration.svg';

export function Head({ location }) {
	return (
		<PageHead
			location={location}
			title="404: Not found"
		/>
	);
}

const NotFoundPage = ({ location }) => {
	return (
		<Layout location={location}>
			<div className="container">
				<img
					alt="Ghost getting abducted by aliens"
					className="block mx-auto w-1/2"
					src={abductionIllustration}
				/>

				<div className="bg-pink-200 text-center rounded-lg px-3 py-5">
					<h2 className="text-gray-800 text-xl font-bold">
						Looks like this page is a ghost that got abducted by aliens...
					</h2>

					<Button
						to="/"
						variant="white"
						icon="mdi:home"
						iconPlacement="before"
						size="sm"
						className="mt-4 normal-case"
					>
						Head home
					</Button>
				</div>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
