import { useEffect, useRef } from 'react';

export function useClickOutside(cb: () => void) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Do nothing if clicking ref's element or descendent elements
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				cb();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [cb]);

	return ref;
}
