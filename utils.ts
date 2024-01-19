export const defaultGrid = [
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', ''],
];

export const keyboardLetters = [
	['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
	['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
	['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

export const enterKey = 'ENTER';
export const backspaceKey = 'BACKSPACE';

export const WORD_API_BASE_URL = process.env['WORD_API_BASE_URL'] as string;
export const CHECK_API_BASE_URL = process.env[
	'NEXT_PUBLIC_CHECK_API_BASE_URL'
] as string;
