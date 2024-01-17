'use client';
import { defaultGrid } from '@/utils';
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';

export interface WordleContextType {
	grid: string[][];
	setGrid: Dispatch<SetStateAction<string[][]>>;
}

export const WordleContext = createContext<WordleContextType | null>(null);

export const useWordleContext = () => useContext(WordleContext);

export const WordleProvider = ({ children }: { children: ReactNode }) => {
	const [grid, setGrid] = useState(defaultGrid);

	return (
		<WordleContext.Provider value={{ grid, setGrid }}>
			{children}
		</WordleContext.Provider>
	);
};
