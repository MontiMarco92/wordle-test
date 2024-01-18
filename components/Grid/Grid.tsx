'use client';
import { Row } from '../Row/Row';
import {
	WordleContextType,
	useWordleContext,
} from '../WordleProvider/WordleProvider';
import styles from './Grid.module.scss';

export const Grid = () => {
	const { grid, setGrid } = useWordleContext();

	return (
		<div className={styles['grid']}>
			{grid.map((row, idx) => (
				<Row key={idx} letterArr={row} />
			))}
		</div>
	);
};
