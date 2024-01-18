'use client';
import styles from './Modal.module.scss';
import { Dispatch, SetStateAction, useEffect } from 'react';
import Image from 'next/image';
import CloseIcon from '../../public/close.svg';
import SuccesImg from '../../public/congratulation.png';
import GameOverImg from '../../public/game-over.png';
import {
	showModalStateType,
	useWordleContext,
} from '../WordleProvider/WordleProvider';

interface ModalProps {
	setShowModal: Dispatch<SetStateAction<showModalStateType>>;
	showModal: showModalStateType;
}

export const Modal = () => {
	const { showModal, setShowModal } = useWordleContext();
	const msgToShow = (key: showModalStateType['type']) => {
		const obj = {
			invalid: "That's not a valid word!",
			ok: "You're awesome!",
			'game-over': 'You lost!',
			'': '',
		};
		return obj[key];
	};

	const showResultIcon =
		showModal.type === 'game-over' || showModal.type === 'invalid';

	return (
		<div className={styles['container']}>
			<div className={styles['modal']}>
				<Image
					src={CloseIcon}
					alt='close icon'
					width={18}
					height={18}
					className={styles['close-icon']}
					onClick={() => setShowModal({ show: false, type: '' })}
				/>
				{showResultIcon && (
					<Image
						src={showModal.type === 'ok' ? SuccesImg : GameOverImg}
						alt='Game result image'
					/>
				)}
				<p>{msgToShow(showModal.type)}</p>
			</div>
		</div>
	);
};
