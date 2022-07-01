import { constants } from 'store/constants';

/**
 * @type {CounterReducer}
 */
const initialState = {
	counter: 0,
};
const { counter } = constants;

export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case counter.DECREMENT:
			return {
				...state,
				counter: state.counter - 1,
			};
		case counter.INCREMENT:
			return {
				...state,
				counter: state.counter + 1,
			};
		default:
			return state;
	}
};
