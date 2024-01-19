import styles from './page.module.scss';
import { Grid } from '@/components/Grid/Grid';
import { Keyboard } from '@/components/Keyboard/Keyboard';
import { WordleProvider } from '@/components/WordleProvider/WordleProvider';
import { getWord } from '@/services/getWord';

export default async function Home() {
	const word = await getWord();
	return (
		<WordleProvider word={word as string}>
			<main className={styles.main}>
				<Grid />
				<Keyboard />
			</main>
		</WordleProvider>
	);
}
