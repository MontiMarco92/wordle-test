import { backspaceKey, enterKey } from '@/utils';
import { useWordleContext } from '../WordleProvider/WordleProvider';
import styles from './Key.module.scss';

export const Key = ({ value }: { value: string }) => {
	const { selectKeyHandler, deleteHandler, enterHandler } = useWordleContext();

	const clickHandler = () => {
		if (value.toUpperCase() === enterKey) enterHandler();
		else if (value.toUpperCase() === backspaceKey) deleteHandler();
		else selectKeyHandler(value);
	};

	return (
		<div className={styles['key']} onClick={clickHandler}>
			{value}
		</div>
	);
};
