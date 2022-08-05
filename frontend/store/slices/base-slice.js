import { createSlice, CaseReducerActions, SliceCaseReducers } from '@reduxjs/toolkit';

/**
 *
 * @type {BaseReducer}
 */
const initialState = {
	industries: [],
	animals: [],
	products: [],
	test: null,
};

const baseSlice = createSlice({
	name: 'baseSlice',
	initialState,
	reducers: {
		setTest: state => {
			state.test = 'test';
		},
	},
});

/**
 *
 * @type {CaseReducerActions<SliceCaseReducers<BaseReducer>>}
 */
export const baseActions = baseSlice.actions;

/**
 *
 * @type {Reducer<BaseReducer>}
 */
export const baseReducer = baseSlice.reducer;
