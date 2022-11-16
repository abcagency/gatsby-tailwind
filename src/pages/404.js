import React from 'react';
import { Link } from 'gatsby';

import PageHead from '~/components/util/page-head';
import Layout from '~/components/layout/layout';
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

					<Link
						className="inline-block mt-4 px-4 py-2 rounded-md bg-white text-sm font-bold text-indigo-700 no-underline hover:bg-indigo-700 hover:text-white transition-colors"
						to="/"
					>
						<Icon
							iconImage="mdi:home"
							sizeClasses="w-5 h-5"
							className="inline-block align-middle -mt-0.5 mr-1"
						/>
						Head home
					</Link>
				</div>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
