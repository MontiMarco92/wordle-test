import styles from './Letter.module.scss';

interface LetterProps {
	letter: string;
}
export const Letter = ({ letter }: LetterProps) => {
	return <div className={styles['letter']}>Letter</div>;
};
