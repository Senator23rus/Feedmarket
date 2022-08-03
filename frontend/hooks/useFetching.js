import { useRef, useState } from 'react';

export const useFetching = callback => {
	// const [isLoading, setIsLoading] = useState(false);
	const isLoading = useRef(false);
	const error = useRef('');
	// const [error, setError] = useState('');

	const fetching = async (...args) => {
		try {
			isLoading.current = true;
			error.current = '';
			const a = async () => {};
			await callback(...args);
		} catch (e) {
			error.current = e.message;
		} finally {
			console.log(isLoading.current);
			isLoading.current = false;
		}
	};

	return [fetching, isLoading.current, error.current];
};
