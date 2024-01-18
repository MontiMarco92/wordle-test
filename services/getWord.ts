import { WORD_API_BASE_URL } from '@/utils';

export const getWord = async () => {
	console.log('🚀 ~ WORD_API_BASE_URL:', WORD_API_BASE_URL);
	try {
		const response = await fetch(WORD_API_BASE_URL);
		console.log('🚀 ~ getWord ~ response:', response);
		const json: string[] = await response.json();
		return json[0].toUpperCase();
	} catch (err) {
		console.log(err);
	}
};
