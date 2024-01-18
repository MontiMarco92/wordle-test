import { Letter } from '../Letter/Letter';
import styles from './Row.module.scss';

interface RowProps {
	letterArr: string[];
}
export const Row = ({ letterArr }: RowProps) => {
	return (
		<div className={styles['row']}>
			{letterArr.map((letter, idx) => (
				<Letter key={idx} letter={letter} pos={idx} />
			))}
		</div>
	);
};
