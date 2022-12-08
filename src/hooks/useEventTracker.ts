const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
	window.dataLayer = window.dataLayer || [];
}

const trackEvent = (
	category: string,
	action: string,
	label: string,
	value: string
) => {
	if (isBrowser && window.dataLayer) {
		window.dataLayer.push({
			'event': 'eventTracking',
			'category': category,
			'action': action,
			'label': label,
			'value': value
		});
	}
};

export default trackEvent;
