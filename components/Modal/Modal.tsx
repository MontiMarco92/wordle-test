'use client';
import styles from './Modal.module.scss';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import CloseIcon from '../../public/close.svg';
import SuccesImg from '../../public/congratulation.png';
import GameOverImg from '../../public/game-over.png';
import {
	showModalStateType,
	useWordleContext,
} from '../WordleProvider/WordleProvider';

export const Modal = () => {
	const { showModal, setShowModal, correctWord } = useWordleContext();
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
		showModal.type === 'game-over' || showModal.type === 'ok';

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
						width={70}
						height={70}
					/>
				)}
				<p className={styles['msg']}>{msgToShow(showModal.type)}</p>
				{showResultIcon && (
					<>
						<p className={styles['msg']}>
							The correct word is{' '}
							<span className={styles['correct-word']}>{correctWord}</span>
						</p>

						<button
							className={styles['btn']}
							onClick={() => window.location.reload()}
						>
							Try Again!
						</button>
					</>
				)}
			</div>
		</div>
	);
};
