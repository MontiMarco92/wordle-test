import { useEffect, useState } from 'react';
import { useWordleContext } from '../WordleProvider/WordleProvider';
import styles from './Letter.module.scss';
import clsx from 'clsx';

interface LetterProps {
	letter: string;
	pos: number;
}
export const Letter = ({ letter, pos }: LetterProps) => {
	const { correctWord, currentAttempt, setUsedLetters } = useWordleContext();
	const [letterState, setLetterState] = useState<
		'correct' | 'disordered' | 'wrong' | ''
	>('');
	const isFilled = !!letter;

	useEffect(() => {
		const isRight = correctWord[pos] === letter;
		const disordered =
			!isRight && letter !== '' && correctWord.includes(letter);
		const wrong = letter !== '' && !isRight && !disordered;

		if (letter !== '' && !isRight && !disordered)
			setUsedLetters((prev) => [...prev, letter]);

		if (isRight) {
			setLetterState('correct');
		} else if (disordered) {
			setLetterState('disordered');
		} else if (wrong) {
			setLetterState('wrong');
		}

		console.log(letterState);
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
