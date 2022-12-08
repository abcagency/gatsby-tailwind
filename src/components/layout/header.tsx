import React, { useState } from 'react';
import Headroom from 'react-headroom';

import Navbar from '~/components/modules/navigation/navbar';

export type HeaderProps = {
	location: Location;
};

const PosMap = {
	PINNED: 'PINNED',
	DEFAULT: 'DEFAULT'
};

const Header = ({ location }: HeaderProps) => {
	const [position, setPosition] = useState(PosMap.PINNED);

	return (
		<Headroom
			style={{ zIndex: 50 }}
			onPin={() => setPosition(PosMap.PINNED)}
			onUnfix={() => setPosition(PosMap.DEFAULT)}
		>
			<header className="bg-gray-200 shadow-lg">
				<Navbar
					position={position}
					location={location}
				/>
			</header>
		</Headroom>
	);
};

export default Header;
