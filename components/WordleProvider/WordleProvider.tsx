'use client';
import { checkWord } from '@/services/checkWord';
import { defaultGrid } from '@/utils';
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';
import { Modal } from '../Modal/Modal';
import styles from './WordleProvider.module.scss';

export interface WordleContextType {
	grid: string[][];
	setGrid: Dispatch<SetStateAction<string[][]>>;
	selectKeyHandler: (key: string) => void; //
	deleteHandler: () => void;
	enterHandler: () => void;
	currentAttempt: { attempt: number; letterPos: number };
	correctWord: string;
	showModal: showModalStateType;
	setShowModal: Dispatch<SetStateAction<showModalStateType>>;
	usedLetters: string[];
	setUsedLetters: Dispatch<SetStateAction<string[]>>;
}

export const WordleContext = createContext<WordleContextType | null>(null);

export const useWordleContext = () =>
	useContext(WordleContext) as WordleContextType;

export type showModalStateType = {
	show: boolean;
	type: 'ok' | 'invalid' | 'game-over' | '';
};

export const WordleProvider = ({
	children,
	word,
}: {
	children: ReactNode;
	word: string;
}) => {
	const [grid, setGrid] = useState(defaultGrid);
	const [currentAttempt, setCurrentAttempt] = useState({
		attempt: 0,
		letterPos: 0,
	});
	const [correctWord] = useState(word);
	const [showModal, setShowModal] = useState<showModalStateType>({
		show: false,
		type: '',
	});
	const [gameOver, setGameOver] = useState(false);
	const [usedLetters, setUsedLetters] = useState<string[]>(['']);

	const selectKeyHandler = (key: string) => {
		if (currentAttempt.letterPos > 4) return;
		const newGrid = [...grid];
		newGrid[currentAttempt.attempt][currentAttempt.letterPos] = key;
		setGrid(newGrid);
		setCurrentAttempt({
			...currentAttempt,
			letterPos: currentAttempt.letterPos + 1,
		});
	};

	const deleteHandler = () => {
		if (currentAttempt.letterPos === 0) return;
		if (showModal.show) {
			setShowModal({ show: false, type: '' });
			return;
		}
		const newGrid = [...grid];
		newGrid[currentAttempt.attempt][currentAttempt.letterPos - 1] = '';
		setGrid(newGrid);
		setCurrentAttempt({
			...currentAttempt,
			letterPos: currentAttempt.letterPos - 1,
		});
	};

	const enterHandler = async () => {
		console.log(currentAttempt, 'currentAttempt');
		if (showModal.show) {
			setShowModal({ show: false, type: '' });
			return;
		}

		//refresh to restart game
		if (gameOver) {
			console.log('enter refreshhh');
			setGameOver(false);
			window.location.reload();
			return;
		}

		//prevent ex enter if word is not complete
		if (currentAttempt.letterPos !== 5) return;

		const wordToCheck = grid[currentAttempt.attempt].join('');
		const isValidWord = await checkWord(wordToCheck);

		//not a valid word entered
		if (!isValidWord) {
			setShowModal({ show: true, type: 'invalid' });
			return;
		}

		//game over
		if (currentAttempt.attempt === 5 && wordToCheck !== correctWord) {
			setShowModal({ show: true, type: 'game-over' });
			setGameOver(true);
			return;
		}

		//game won
		if (wordToCheck === correctWord) {
			setShowModal({ show: true, type: 'ok' });
			setGameOver(true);
			return;
		}

		setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPos: 0 });
	};

	return (
		<WordleContext.Provider
			value={{
				grid,
				setGrid,
				selectKeyHandler,
				currentAttempt,
				deleteHandler,
				correctWord,
				enterHandler,
				showModal,
				setShowModal,
				usedLetters,
				setUsedLetters,
			}}
		>
			<div className={styles['container']}>
				{children}
				{showModal.show && <Modal />}
			</div>
		</WordleContext.Provider>
	);
};
