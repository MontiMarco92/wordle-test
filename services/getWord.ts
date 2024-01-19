import { WORD_API_BASE_URL } from '@/utils';
import { checkWord } from './checkWord';

export const getWord = async (): Promise<string | undefined> => {
	try {
		const response = await fetch(WORD_API_BASE_URL, { cache: 'no-store' });
		const json: string[] = await response.json();
		const validWord = await checkWord(json[0]);

		//check if random word is valid, otherwise the correct word won't be valid;
		if (validWord) {
			return json[0].toUpperCase();
		} else {
			return await getWord();
		}
	} catch (err) {
		console.log(err);
	}
};
