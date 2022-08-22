import { useEffect, useState } from 'react';

export const useDebounced = (value, delay = 300) => {
	const [debounced, setDebounced] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebounced(value);
		}, delay);
		return () => clearTimeout(timer);
	}, [delay, value]);
	return debounced;
};
