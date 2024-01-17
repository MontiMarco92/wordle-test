import { Letter } from '../Letter/Letter';
import styles from './Row.module.scss';

interface RowProps {
	letterArr: string[];
	attempt: number;
}
export const Row = ({ letterArr, attempt }: RowProps) => {
	return (
		<div className={styles['row']}>
			{letterArr.map((letter, idx) => (
				<Letter key={idx} letter={letter} />
			))}
		</div>
	);
};
