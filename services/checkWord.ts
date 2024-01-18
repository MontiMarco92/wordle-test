import { CHECK_API_BASE_URL } from '@/utils';

export const checkWord = async (word: string) => {
	try {
		const response = await fetch(`${CHECK_API_BASE_URL}/${word}`, {
			cache: 'no-store',
		});
		return response.ok ? true : false;
	} catch (err) {
		console.log(err);
	}
};
