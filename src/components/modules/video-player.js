import React from 'react';
import ReactPlayer from 'react-player/lazy';

/*
Responsive video player using react-player
@url: https://github.com/CookPete/react-player

@url: Video file URL
@placeholder: Video poster image
@playerOptions: Use to pass in any extra options to react-player
@containerClasses: Pass extra classes to the container element
@aspectRatio: Set player aspect ratio (Default: 16x9)
*/

function VideoPlayer({ url, placeholder, playerOptions, containerClasses, aspectRatio }) {
	return (
		<div className={`block relative w-full overflow-hidden ${containerClasses}`}>
			{/*
				Inline switch to set player aspect ratio

				@default: 16x9
				@usage: aspectRatio="21x9"
			*/}
			{
				{
					'21x9': <span className="block pt-[42.86%]" aria-hidden="true"></span>,
					'16x9': <span className="block pt-[56.25%]" aria-hidden="true"></span>,
					'4x3': <span className="block pt-[75%]" aria-hidden="true"></span>,
					'1x1': <span className="block pt-[100%]" aria-hidden="true"></span>
				}[aspectRatio]
				|| <span className="block pt-[56.25%]" aria-hidden="true"></span>
			}

			<ReactPlayer
				className="absolute inset-y-0 left-0 w-full h-full border-0 my-0"
				url={url}
				light={placeholder}
				width="100%"
				height="100%"
				playing={true}
				{...playerOptions}
			/>
		</div>
	);
}

export default VideoPlayer;
