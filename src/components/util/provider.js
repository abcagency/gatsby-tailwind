import React, { useState } from 'react';

export const globalContext = React.createContext();

const Provider = props => {
	const [activeSection, setActiveSection] = useState('');

	return (
		<globalContext.Provider value={{
			activeSection,
			setActiveSection: sectionName => setActiveSection(sectionName)
		}}>
			{props.children}
		</globalContext.Provider>
	);
};

export const provider = ({ element }) => (
	<Provider>
		{element}
	</Provider>
);
