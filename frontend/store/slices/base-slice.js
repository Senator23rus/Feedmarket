import {
	createSlice,
	CaseReducerActions,
	SliceCaseReducers,
	Slice,
} from '@reduxjs/toolkit';

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

/**
 *
 * @type {Slice<{test: (string|null), industries: *[], animals: *[], products: *[]}, {setTest: reducers.setTest}, string>}
 */
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
export const { setTest } = baseSlice.actions;

/**
 *
 * @type {Reducer<BaseReducer>}
 */
export const baseReducer = baseSlice.reducer;
