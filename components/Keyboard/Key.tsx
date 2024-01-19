import { backspaceKey, enterKey } from '@/utils';
import { useWordleContext } from '../WordleProvider/WordleProvider';
import styles from './Key.module.scss';
import clsx from 'clsx';

export const Key = ({
	value,
	alreadyUsed = false,
}: {
	value: string;
	alreadyUsed?: boolean;
}) => {
	const { selectKeyHandler, deleteHandler, enterHandler } = useWordleContext();

	const clickHandler = () => {
		if (value.toUpperCase() === enterKey) enterHandler();
		else if (value.toUpperCase() === backspaceKey) deleteHandler();
		else selectKeyHandler(value);
	};

	return (
		<div
			className={clsx(styles['key'], { [styles['used']]: alreadyUsed })}
			onClick={clickHandler}
		>
			{value}
		</div>
	);
};
