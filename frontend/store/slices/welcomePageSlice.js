import cards from '../../mock/welcomePageCards.json';
import { createSlice } from '@reduxjs/toolkit';
import {WelcomePageAddCommentAction} from "store/action-creators/welcomePageAddCommentAction";

/**
 *
 * @type {BaseReducer}
 */
const WelcomePageSlice = createSlice({
	name: 'welcomePageSlice',
	initialState: cards,
	reducers: {
		clear(state) {
			return cards;
		},
	},
	extraReducers: builder => {
		builder.addCase(WelcomePageAddCommentAction.fulfilled, (state, { payload }) => {
			return state.concat(payload);
		})
	}
});

/**
 *
 * @type {Reducer<BaseReducer>}
 */
export default WelcomePageSlice.reducer;
/**
 *
 * @type {CaseReducerActions<SliceCaseReducers<BaseReducer>>}
 */
export const welcomePageSlice = WelcomePageSlice.actions;
