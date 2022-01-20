import { useState, useEffect } from 'react';

export const WelcomeHOC = ({ WrappedComponent }) => {
	const emodjies = ['😀', '😁', '😊', '🙂', '😎', '🤩', '🤑', '😇', '🤓', '🤠'];
	const [emodji, setEmodji] = useState(' ');

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * 10);
		setEmodji(emodjies[randomIndex]);
	}, []);

	return <WrappedComponent emodji={emodji} />;
};
