import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
};

const SomeSlice = createSlice({
	name: 'someSlice',
	initialState,
	reducers: {
		increment(state) {
			state.count++;
		},
		decrement(state) {
			state.count--;
		},
	},
});

export default SomeSlice.reducer;
export const someSliceActions = SomeSlice.actions;
