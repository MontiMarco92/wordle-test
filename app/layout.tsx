import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Wordle-Test',
	description: 'Test for Webpac',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<nav className='navbar'>
					<h1 className='title'>Wordle</h1>
				</nav>
				{children}
			</body>
		</html>
	);
}
