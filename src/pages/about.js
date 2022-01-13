import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '~/components/util/seo';
import Layout from '~/components/layout/layout';
import Figure from '~/components/modules/figure';
import VideoPlayer from '~/components/modules/video-player';
import Carousel from '~/components/modules/carousel';

const AboutPage = () => {
	return (
		<Layout>
			<Seo
				keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
				title="About"
			/>

			<div className="bg-gray-100 py-6 px-4 mb-6 text-center">
				<h1 className="text-4xl font-bold mb-3">About</h1>
			</div>

			<div className="container px-4 mx-auto">
				<Figure
					title="A dog wrapped in a blanket in the woods"
				>
					<StaticImage
						src="../images/dog.jpg"
						alt="A dog wrapped in a blanket in the woods"
						placeholder="blurred"
					/>
				</Figure>

				<section className="max-w-3xl mx-auto my-20 px-4">
					<Carousel name="test">
						<div>
							<img src="https://picsum.photos/id/10/1920/1080" alt="" />
						</div>
						<div>
							<img src="https://picsum.photos/id/1000/1920/1080" alt="" />
						</div>
						<div>
							<img src="https://picsum.photos/id/1001/1920/1080" alt="" />
						</div>
						<div>
							<img src="https://picsum.photos/id/10/1920/1080" alt="" />
						</div>
						<div>
							<img src="https://picsum.photos/id/1002/1920/1080" alt="" />
						</div>
						<div>
							<img src="https://picsum.photos/id/1003/1920/1080" alt="" />
						</div>
						<div>
							<img src="https://picsum.photos/id/1015/1920/1080" alt="" />
						</div>
						<div>
							<img src="https://picsum.photos/id/1016/1920/1080" alt="" />
						</div>
					</Carousel>
				</section>

				<section className="prose prose-sm md:prose-lg lg:prose-xl prose-indigo mx-auto">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat ultrices nunc, id tempor erat luctus in. Aliquam euismod convallis dignissim. Mauris ac tristique metus. Praesent id faucibus arcu, cursus pretium nisi. Nam et turpis sed arcu porttitor pretium. Proin varius commodo arcu ut iaculis. Vestibulum congue rhoncus sem iaculis sodales. Donec ipsum lacus, sodales quis sapien ac, dictum facilisis nibh. Morbi eget porttitor ipsum. Phasellus vitae lacus nunc. Maecenas turpis ligula, hendrerit vitae leo auctor, finibus interdum sapien. Nam molestie, augue in ornare imperdiet, turpis mauris ultricies magna, et sagittis nulla dui vitae libero. In dignissim nisi non erat dapibus auctor. Praesent mattis felis eget tellus facilisis, eget pharetra risus malesuada. Sed eleifend tristique leo, non ultrices velit pellentesque at. Praesent lobortis ac odio sed viverra.</p>

					<VideoPlayer
						containerClasses="my-10"
						url='https://cdn.flowplayer.com/6c7629eb-c3af-4165-80d3-96cce8c83f78/hls/e75ffaba-bbde-4409-bfbc-2297e657240c/playlist.m3u8'
						placeholder="https://cdn.flowplayer.com/6c7629eb-c3af-4165-80d3-96cce8c83f78/i/v-i-e75ffaba-bbde-4409-bfbc-2297e657240c-1.jpg"
						playerOptions={{
							controls: true
						}}
					/>

					<p>Nunc ultricies fringilla purus sed consectetur. Mauris ornare, urna vel commodo rhoncus, nunc lorem cursus sapien, a iaculis dolor ex sed dolor. Pellentesque vitae lacus id purus dignissim tempus aliquam ac arcu. Pellentesque accumsan ornare sapien sed semper. Suspendisse consectetur et arcu et commodo. Proin cursus ex libero, sed commodo mi viverra eget. Praesent tempor metus sit amet diam pellentesque mattis tempor vitae quam. Ut tincidunt justo nec nisi congue, volutpat facilisis arcu ullamcorper. Aliquam dignissim arcu ipsum, sed eleifend lacus malesuada a. Suspendisse condimentum erat tortor, vitae lacinia sapien posuere sit amet. Maecenas eget euismod ante, a pharetra elit.</p>

					<h2>A cool heading</h2>

					<p>Ut porttitor imperdiet ligula eget ultricies. Nullam at congue turpis. Etiam id nisi vel augue volutpat faucibus a bibendum elit. Sed volutpat, neque sit amet tincidunt aliquam, nisi velit sagittis eros, id interdum lacus dui sit amet quam. Nunc in elit libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut est in sapien pretium vestibulum. Proin varius orci quis ultrices fringilla. Nullam interdum mi in est pharetra consequat. Aenean pellentesque sapien quam, at commodo lorem scelerisque sit amet. Quisque finibus sit amet eros et varius. Fusce et dui in felis consequat ornare. Cras ac quam imperdiet, molestie dui a, vulputate leo.</p>

					<p>In lorem mi, iaculis sed sapien sit amet, gravida commodo eros. Integer pellentesque in mi sit amet sollicitudin. Praesent aliquam, odio quis commodo gravida, neque libero facilisis tortor, sed tempus ex mi sed magna. Proin quis gravida dolor. Sed tristique odio sit amet facilisis ullamcorper. Vivamus sit amet pretium lacus. Praesent mi lectus, ultricies eu ornare quis, blandit nec diam. Phasellus vitae pellentesque dolor. Proin est eros, hendrerit sed aliquet sit amet, auctor a libero. Quisque sit amet ipsum libero. Aliquam justo massa, mollis non nisi venenatis, elementum iaculis justo. Fusce malesuada mollis mauris, non eleifend turpis dapibus sed. Cras mollis commodo consequat. Donec in tempor turpis. Vivamus vehicula dignissim diam.</p>
				</section>
			</div>
		</Layout>
	);
};

export default AboutPage;
