import { useEffect, useState } from 'react';
import { useWordleContext } from '../WordleProvider/WordleProvider';
import styles from './Letter.module.scss';
import clsx from 'clsx';

interface LetterProps {
	letter: string;
	pos: number;
}
export const Letter = ({ letter, pos }: LetterProps) => {
	const { correctWord, currentAttempt } = useWordleContext();
	const [letterState, setLetterState] = useState<'correct' | 'disordered' | ''>(
		''
	);
	const isFilled = !!letter;

	useEffect(() => {
		const isRight = correctWord[pos] === letter;
		const disordered =
			!isRight && letter !== '' && correctWord.includes(letter);
		if (isRight) {
			setLetterState('correct');
			return;
		}
		if (disordered) setLetterState('disordered');
	}, [currentAttempt.attempt]);

	return (
		<div
			className={clsx(styles[`letter`], {
				[styles['filled']]: isFilled,
				[styles[`${letterState}`]]: letterState,
			})}
		>
			{letter}
		</div>
	);
};
