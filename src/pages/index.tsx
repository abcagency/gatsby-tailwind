import React from 'react';

import Layout from '~/components/layout/layout';
import PageHead from '~/components/util/page-head';
import PageNav from '~/components/modules/navigation/page';
import Section from '~/components/modules/section';

import useSectionTracker from '~/hooks/useSectionTracker';

export function Head({ location }) {
	return (
		<PageHead
			location={location}
			title=""
			keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
		/>
	);
}

const IndexPage = ({ location }) => {
	const setCurrentSection = useSectionTracker();

	return (
		<Layout location={location}>
			<PageNav
				anchors={[
					{
						id: 'intro',
						name: 'Intro'
					},
					{
						id: 'foo',
						name: 'Foo'
					},
					{
						id: 'bar',
						name: 'Bar'
					}
				]}
			/>

			<Section
				id="intro"
				setCurrentSection={setCurrentSection}
				className="container px-4 my-12"
			>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dolor inventore deserunt, perferendis asperiores quibusdam repudiandae, sequi maiores unde tempora esse aliquid necessitatibus, excepturi ea incidunt ex blanditiis tenetur beatae. Fugiat voluptatem blanditiis reiciendis earum repellat, qui dolor tenetur maiores at voluptate enim modi asperiores ab corrupti explicabo recusandae ea excepturi assumenda quae iure rem similique consectetur veritatis minima. Natus. Ipsa aliquam sapiente expedita quidem vitae sit architecto eveniet est id quaerat saepe modi unde esse sequi sint dolorem adipisci in eos, ducimus reprehenderit ea, iusto molestiae rem. Ad, ipsam. A quisquam ex dolor pariatur debitis sequi veritatis rem delectus facere totam, incidunt quibusdam fugiat provident repudiandae laborum mollitia dolorum odit? Molestiae alias, temporibus culpa fugiat libero incidunt perspiciatis voluptas. Quia, necessitatibus! Ipsam accusamus atque ipsum nisi dolor repudiandae officiis, cum accusantium iure inventore facilis magni debitis itaque blanditiis, placeat eum? Cupiditate error obcaecati soluta consectetur, in officiis quaerat aliquid! Rerum ut odio dolore excepturi ipsam ducimus sapiente quas consequuntur porro iure optio laborum, voluptas doloribus id rem tenetur eligendi delectus corporis aspernatur amet necessitatibus! Numquam officia sunt maxime nihil? Iure, asperiores beatae amet odit, autem, quidem id officia maxime debitis rerum unde distinctio. Ipsa, dolore quidem quibusdam nihil repellendus sapiente recusandae corrupti deserunt dolor ad a officia quis odio. Rem, natus sapiente! Modi enim quidem consequatur, nobis facere eligendi similique vero rerum praesentium fuga nesciunt, nihil velit. Repudiandae atque illo repellendus sunt nostrum nobis rerum soluta eos praesentium! Autem! Unde odio vero, nesciunt voluptas eius sit. Quia, ex earum beatae mollitia ipsum at, aliquam officiis cum minus molestiae error quos voluptatibus. Ipsam quod rem fugiat, voluptatum voluptas quasi non!  Recusandae ea excepturi dignissimos vel nisi voluptatum inventore sapiente est facilis, at modi provident, eius eligendi placeat error architecto odio? Explicabo soluta, culpa qui blanditiis alias officiis dolore eaque expedita?</p>
			</Section>

			<Section
				id="foo"
				setCurrentSection={setCurrentSection}
				className="container px-4 my-12"
			>
				<h2 className="mb-4 text-2xl font-bold">Foo</h2>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dolor inventore deserunt, perferendis asperiores quibusdam repudiandae, sequi maiores unde tempora esse aliquid necessitatibus, excepturi ea incidunt ex blanditiis tenetur beatae. Fugiat voluptatem blanditiis reiciendis earum repellat, qui dolor tenetur maiores at voluptate enim modi asperiores ab corrupti explicabo recusandae ea excepturi assumenda quae iure rem similique consectetur veritatis minima. Natus. Ipsa aliquam sapiente expedita quidem vitae sit architecto eveniet est id quaerat saepe modi unde esse sequi sint dolorem adipisci in eos, ducimus reprehenderit ea, iusto molestiae rem. Ad, ipsam. A quisquam ex dolor pariatur debitis sequi veritatis rem delectus facere totam, incidunt quibusdam fugiat provident repudiandae laborum mollitia dolorum odit? Molestiae alias, temporibus culpa fugiat libero incidunt perspiciatis voluptas. Quia, necessitatibus! Ipsam accusamus atque ipsum nisi dolor repudiandae officiis, cum accusantium iure inventore facilis magni debitis itaque blanditiis, placeat eum? Cupiditate error obcaecati soluta consectetur, in officiis quaerat aliquid! Rerum ut odio dolore excepturi ipsam ducimus sapiente quas consequuntur porro iure optio laborum, voluptas doloribus id rem tenetur eligendi delectus corporis aspernatur amet necessitatibus! Numquam officia sunt maxime nihil? Iure, asperiores beatae amet odit, autem, quidem id officia maxime debitis rerum unde distinctio. Ipsa, dolore quidem quibusdam nihil repellendus sapiente recusandae corrupti deserunt dolor ad a officia quis odio. Rem, natus sapiente! Modi enim quidem consequatur, nobis facere eligendi similique vero rerum praesentium fuga nesciunt, nihil velit. Repudiandae atque illo repellendus sunt nostrum nobis rerum soluta eos praesentium! Autem! Unde odio vero, nesciunt voluptas eius sit. Quia, ex earum beatae mollitia ipsum at, aliquam officiis cum minus molestiae error quos voluptatibus. Ipsam quod rem fugiat, voluptatum voluptas quasi non!  Recusandae ea excepturi dignissimos vel nisi voluptatum inventore sapiente est facilis, at modi provident, eius eligendi placeat error architecto odio? Explicabo soluta, culpa qui blanditiis alias officiis dolore eaque expedita?</p>
			</Section>

			<Section
				id="bar"
				setCurrentSection={setCurrentSection}
				className="container px-4 my-12"
			>
				<h2 className="mb-4 text-2xl font-bold">Bar</h2>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dolor inventore deserunt, perferendis asperiores quibusdam repudiandae, sequi maiores unde tempora esse aliquid necessitatibus, excepturi ea incidunt ex blanditiis tenetur beatae. Fugiat voluptatem blanditiis reiciendis earum repellat, qui dolor tenetur maiores at voluptate enim modi asperiores ab corrupti explicabo recusandae ea excepturi assumenda quae iure rem similique consectetur veritatis minima. Natus. Ipsa aliquam sapiente expedita quidem vitae sit architecto eveniet est id quaerat saepe modi unde esse sequi sint dolorem adipisci in eos, ducimus reprehenderit ea, iusto molestiae rem. Ad, ipsam. A quisquam ex dolor pariatur debitis sequi veritatis rem delectus facere totam, incidunt quibusdam fugiat provident repudiandae laborum mollitia dolorum odit? Molestiae alias, temporibus culpa fugiat libero incidunt perspiciatis voluptas. Quia, necessitatibus! Ipsam accusamus atque ipsum nisi dolor repudiandae officiis, cum accusantium iure inventore facilis magni debitis itaque blanditiis, placeat eum? Cupiditate error obcaecati soluta consectetur, in officiis quaerat aliquid! Rerum ut odio dolore excepturi ipsam ducimus sapiente quas consequuntur porro iure optio laborum, voluptas doloribus id rem tenetur eligendi delectus corporis aspernatur amet necessitatibus! Numquam officia sunt maxime nihil? Iure, asperiores beatae amet odit, autem, quidem id officia maxime debitis rerum unde distinctio. Ipsa, dolore quidem quibusdam nihil repellendus sapiente recusandae corrupti deserunt dolor ad a officia quis odio. Rem, natus sapiente! Modi enim quidem consequatur, nobis facere eligendi similique vero rerum praesentium fuga nesciunt, nihil velit. Repudiandae atque illo repellendus sunt nostrum nobis rerum soluta eos praesentium! Autem! Unde odio vero, nesciunt voluptas eius sit. Quia, ex earum beatae mollitia ipsum at, aliquam officiis cum minus molestiae error quos voluptatibus. Ipsam quod rem fugiat, voluptatum voluptas quasi non!  Recusandae ea excepturi dignissimos vel nisi voluptatum inventore sapiente est facilis, at modi provident, eius eligendi placeat error architecto odio? Explicabo soluta, culpa qui blanditiis alias officiis dolore eaque expedita?</p>
			</Section>
		</Layout>
	);
};

export default IndexPage;

