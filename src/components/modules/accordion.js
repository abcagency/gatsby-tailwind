import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import chevronDown from '@iconify/icons-mdi/chevron-down';
import { Placeholder } from 'gatsby-plugin-image';

const Accordion = props => {
	const { content } = props;

	return (
		<>
			{content.map(item => (
				<Disclosure key={item.id}>
					{({ open }) => (
						<>
							<Disclosure.Button
								className={`flex justify-between w-full p-4 font-bold text-left text-gray-700 dark:text-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 hover:bg-gray-200 hover:dark:bg-gray-700 focus:bg-gray-200 focus:dark:bg-gray-700 transition-colors border-b border-white dark:border-gray-800 ${open ? "bg-gray-200 dark:bg-gray-700" : "bg-gray-100 dark:bg-gray-900"}`}
							>
								<span>{item.heading}</span>
								<Icon
									icon={chevronDown}
									className={`!transform !translate-y-1 ${open ? "!rotate-180" : ""}`}
									height="1rem"
									width="1rem"
									aria-hidden="true"
								/>
							</Disclosure.Button>
							<Transition
								show={open}
								enter="transition duration-100 ease-out"
								enterFrom="transform scale-95 opacity-0"
								enterTo="transform scale-100 opacity-100"
								leave="transition duration-75 ease-out"
								leaveFrom="transform scale-100 opacity-100"
								leaveTo="transform scale-95 opacity-0"
							>
								<Disclosure.Panel
									static
									className="p-4"
								>
									<Placeholder dangerouslySetInnerHTML={{ __html: item.content }} />
								</Disclosure.Panel>
							</Transition>
						</>
					)}
				</Disclosure>
			))}
		</>
	);
};

export default Accordion;
