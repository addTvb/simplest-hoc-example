import { useState, useEffect } from 'react';
import { Welcome } from './Welcome';

export const WelcomeHOC = () => {
	const emodjies = ['😀', '😁', '😊', '🙂', '😎', '🤩', '🤑', '😇', '🤓', '🤠'];
	const [emodji, setEmodji] = useState(' ');

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * 10);
		setEmodji(emodjies[randomIndex]);
	}, [emodjies]);

	return <Welcome emodji={emodji} />;
};
