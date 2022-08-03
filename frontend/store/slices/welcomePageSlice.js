import cards from '../../mock/welcomePageCards.json';
import { createSlice } from '@reduxjs/toolkit';

const WelcomePageSlice = createSlice({
	name: 'welcomePageSlice',
	initialState: cards,
	reducers: {
		addCard(state, action) {
			return state.concat(action.payload);
		},
		clear(state) {
			return cards;
		},
	},
});

export default WelcomePageSlice.reducer;
export const welcomePageSlice = WelcomePageSlice.actions;
