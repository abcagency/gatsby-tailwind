import React from 'react';
import ReactPlayer from 'react-player/lazy';

/*
Responsive video player using react-player
@url: https://github.com/CookPete/react-player

@url: Video file URL
@placeholder: Video poster image
@playerOptions: Use to pass in any extra options to react-player
*/

const VideoPlayer = ({ url, placeholder, playerOptions, className }) => {
	return (
		<ReactPlayer
			className={`border-0 aspect-[16/9] ${className ?? ''}`}
			url={url}
			light={placeholder}
			width="100%"
			height="100%"
			playing={true}
			{...playerOptions}
		/>
	);
};

export default VideoPlayer;
