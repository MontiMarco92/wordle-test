'use client';
import { Row } from '../Row/Row';
import { useWordleContext } from '../WordleProvider/WordleProvider';
import styles from './Grid.module.scss';

export const Grid = () => {
	const { grid } = useWordleContext();

	return (
		<div className={styles['grid']}>
			{grid.map((row, idx) => (
				<Row key={idx} letterArr={row} />
			))}
		</div>
	);
};
