import React, { useState } from 'react';

export interface IGlobalContext {
	activeSection: string | null;
	setActiveSection: (activeSection: string) => void;
}

export type ProviderProps = {
	children: JSX.Element;
};

export type providerProps = {
	element: JSX.Element;
};

export const globalContext = React.createContext<IGlobalContext | null>(null);

const Provider = (props: ProviderProps) => {
	const [activeSection, setActiveSection] = useState('');

	return (
		<globalContext.Provider
			value={{
				activeSection,
				setActiveSection: (sectionName: string) => setActiveSection(sectionName)
			}}
		>
			{props.children}
		</globalContext.Provider>
	);
};

export const provider = ({ element }: providerProps) => (
	<Provider>
		{element}
	</Provider>
);
