import React, { useState } from 'react';

const Toggle = ({ toggle, content }) => {
	const [isVisible, setIsVisible] = useState(false);
	const hide = () => setIsVisible(false);
	const show = () => setIsVisible(true);

	return (
		<React.Fragment>
			{ toggle(show) }
			{ isVisible && content(hide) }
		</React.Fragment>
	)
}

export { Toggle };