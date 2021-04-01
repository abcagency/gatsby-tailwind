import React from 'react';
import Link from 'gatsby-plugin-transition-link/AniLink';
import { Icon } from '@iconify/react';
import Home from '@iconify/icons-mdi/home';

import Layout from '../components/layout/layout';
import Seo from '../components/util/seo';
import abductionIllustration from '../images/abduction-illustration.svg';

function NotFoundPage() {
	return (
		<Layout>
			<Seo title="404: Not found" />
			<div className="container mx-auto">
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
						paintDrip
						hex="#1D4ED8"
					>
						<Icon icon={Home} height="1.25rem" width="1.25rem" className="inline-block -mt-0.5 mr-1" />
						Head home
					</Link>
				</div>
			</div>
		</Layout>
	);
}

export default NotFoundPage;
