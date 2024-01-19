'use client';
import { backspaceKey, enterKey, keyboardLetters } from '@/utils';
import styles from './Keyboard.module.scss';
import { Key } from './Key';
import { useCallback, useEffect } from 'react';
import { useWordleContext } from '../WordleProvider/WordleProvider';

export const Keyboard = () => {
	const {
		selectKeyHandler,
		deleteHandler,
		enterHandler,
		currentAttempt,
		showModal,
		usedLetters,
	} = useWordleContext();

	const handleKeyPress = useCallback(
		(e: KeyboardEvent) => {
			if (e.key.toUpperCase() === backspaceKey) {
				deleteHandler();
			} else if (e.key.toUpperCase() === enterKey) {
				enterHandler();
			} else if (
				keyboardLetters.map((letterArr) =>
					letterArr.includes(e.key.toUpperCase())
				)
			) {
				selectKeyHandler(e.key.toUpperCase());
			}
		},
		[currentAttempt, showModal]
	);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		return () => document.removeEventListener('keydown', handleKeyPress);
	}, [handleKeyPress]);

	return (
		<div className={styles['container']}>
			<div className={styles['row']}>
				{keyboardLetters[0].map((key, idx) => (
					<Key key={idx} value={key} alreadyUsed={usedLetters.includes(key)} />
				))}
			</div>
			<div className={styles['row']}>
				{keyboardLetters[1].map((key, idx) => (
					<Key key={idx} value={key} alreadyUsed={usedLetters.includes(key)} />
				))}
			</div>
			<div className={styles['row']}>
				<Key value={'BACKSPACE'} />
				{keyboardLetters[2].map((key, idx) => (
					<Key key={idx} value={key} alreadyUsed={usedLetters.includes(key)} />
				))}
				<Key value={'ENTER'} />
			</div>
		</div>
	);
};
