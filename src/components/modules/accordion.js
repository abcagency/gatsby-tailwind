import React, { useEffect } from 'react';
import { Disclosure, Transition } from '@headlessui/react';

import Icon from '~/components/modules/icon';

import trackEvent from '~/hooks/useEventTracker';

const Accordion = props => {
	const { items } = props;

	const OpenStateTracker = ({ open, action, label }) => {
		useEffect(() => {
			if (open) {
				trackEvent('Engagement', action, label);
			}
		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [open]);
		return null;
	};

	return (
		<>
			{items.map(item => (
				<Disclosure key={item.id}>
					{({ open }) => (
						<>
							<OpenStateTracker open={open} action="Open Accordion" label={item.title} />
							<Disclosure.Button
								className={`flex justify-between w-full p-4 font-bold text-left text-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 hover:bg-gray-200 focus:bg-gray-200 transition-colors border-b border-white ${open ? "bg-gray-200" : "bg-gray-100"}`}
							>
								<span>{item.title}</span>
								<Icon
									icon="mdi:chevron-down"
									sizeClasses="w-4 h-4"
									className={`transition-transform !transform !translate-y-1 ${open ? "!rotate-180" : ""}`}
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
									<div dangerouslySetInnerHTML={{ __html: item.content }} />
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
