import { WordleProvider } from '@/components/WordleProvider';
import styles from './page.module.scss';
import { Grid } from '@/components/Grid/Grid';

export default function Home() {
	return (
		<WordleProvider>
			<main className={styles.main}>
				<Grid />
			</main>
		</WordleProvider>
	);
}
