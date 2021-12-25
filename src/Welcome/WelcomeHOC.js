import { useState, useEffect } from 'react';
import { Welcome } from './Welcome';

export const WelcomeHOC = () => {
	const emodjies = ['😀', '😁', '😊', '🙂', '😎', '🤩', '🤑', '😇', '🤓', '🤠'];
	const [emodji, setEmodji] = useState('_');

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * 10);
		setEmodji(emodjies[randomIndex]);
	}, []);

	return <Welcome emodji={emodji} />;
};
