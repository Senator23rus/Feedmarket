import { configureStore } from '@reduxjs/toolkit';
import reducers from 'store/reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const rootReducer = reducers;

const logger = createLogger();

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
	middleware.push(logger);
}

const saveState = state => {
	try {
		const serialisedState = JSON.stringify(state);
		window.localStorage.setItem('app_state', serialisedState);
	} catch (err) {}
};

const loadState = () => {
	try {
		const serialisedState = window.localStorage.getItem('app_state');
		if (!serialisedState) return undefined;
		return JSON.parse(serialisedState);
	} catch (err) {
		return undefined;
	}
};

const oldState = loadState();

export const store = configureStore({
	reducer: rootReducer,
	...(oldState && { preloadedState: oldState }),
	middleware,
	devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => {
	saveState(store.getState());
});
