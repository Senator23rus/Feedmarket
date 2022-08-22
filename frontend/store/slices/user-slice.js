import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'api';

/**
 * @type {UserReducer}
 */
const initialState = {
	token: null,
	isAuth: false,
	isLoading: false,
};

const loggedIn = createAsyncThunk('userSlice/loggedIn', async data => {
	const response = await api.login(data);
	return response;
});

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		logOut: (/**@param {UserReducer} state*/ state) => {
			state.isAuth = false;
			state.token = null;
		},
	},
	extraReducers: builder => {
		builder.addCase(loggedIn.pending, state => {
			console.log('load');
			state.isLoading = true;
		});
		builder.addCase(
			loggedIn.fulfilled,
			/**
			 * @param {UserReducer} state
			 * @param {payload} any
			 */
			(state, { payload }) => {
				console.log('full');
				state.isLoading = false;
				state.token = payload;
				state.isAuth = true;
			}
		);
		builder.addCase(loggedIn.rejected, () => {
			console.log('error');
		});
	},
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
export const userThunk = {
	loggedIn,
};
