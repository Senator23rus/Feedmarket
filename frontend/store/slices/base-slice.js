import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	industries: [],
	animals: [],
	products: [],
};
/**
 * @type {import('@reduxjs/toolkit/src').Slice}
 */
const baseSlice = createSlice({
	name: 'baseSlice',
	initialState,
	reducer: {},
});

export const baseActions = baseSlice.actions;

export const baseReducer = baseSlice.reducer;
