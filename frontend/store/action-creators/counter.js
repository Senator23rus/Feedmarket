import { constants } from '../constants';

const { counter } = constants;
export const increment = () => {
	return dispatch => {
		dispatch({ type: counter.INCREMENT });
	};
};
export const decrement = () => {
	return dispatch => {
		dispatch({ type: counter.DECREMENT });
	};
};
