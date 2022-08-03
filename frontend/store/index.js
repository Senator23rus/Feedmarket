import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import reducers from 'store/reducers';
import thunk from 'redux-thunk';
const SET_CLIENT_STATE = 'SET_CLIENT_STATE';

// const storeEnhancers =
// 	(typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
// 	compose;
//
const makeStore = ({ isServer }) => {
	const oldState = loadState();
	const reducer = (state, action) => {
		if (action.type === HYDRATE) {
			return {
				...state, // use previous state
				...action.payload, // apply delta from hydration
			};
		} else {
			return reducers(state, action);
		}
	};
	if (isServer) {
		return configureStore({
			reducer,
			...(oldState && { preloadedState: oldState }),
			// middleware: getDefaultMiddleware =>
			// 	getDefaultMiddleware({
			// 		serializableCheck: {
			// 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			// 		},
			// 	}),
		});
	} else {
		// const persistConfig = {
		// 	key: 'nextjs',
		// 	whitelist: ['catalog'],
		// 	storage,
		// };

		const middleware = [thunk];

		const store = configureStore({
			reducer,
			...(oldState && { preloadedState: oldState }),
			middleware,
			// : getDefaultMiddleware =>
			// 			getDefaultMiddleware({
			// 				serializableCheck: {
			// 					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			// 				},
			// 			}),
		});

		// Argument type
		// {enhancers: (next: StoreEnhancerStoreCreator) =>
		// 	StoreEnhancerStoreCreator<{dispatch: ThunkDispatch<any, undefined, AnyAction>}, {}>,
		// 	reducer: Reducer<EmptyObject & PersistPartial, AnyAction>}
		// 	is not assignable to parameter type
		// 	ConfigureStoreOptions<any, AnyAction, [ThunkMiddlewareFor<any>]>

		store.subscribe(() => {
			saveState(store.getState());
		});

		return store;
	}
};
//
// export const wrapper = createWrapper(makeStore);
//
// export const setClientState = clientState => ({
// 	type: SET_CLIENT_STATE,
// 	payload: clientState,
// });

// import { configureStore } from '@reduxjs/toolkit';
// import reducers from 'store/reducers';
// import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import { createWrapper } from 'next-redux-wrapper';
//
const rootReducer = reducers;

function saveState(state) {
	try {
		const serialisedState = JSON.stringify(state);
		window.localStorage.setItem('app_state', serialisedState);
	} catch (err) {}
}

function loadState() {
	try {
		const serialisedState = window.localStorage.getItem('app_state');
		if (!serialisedState) return undefined;
		return JSON.parse(serialisedState);
	} catch (err) {
		return undefined;
	}
}

// export const store = configureStore({
// 	reducer: rootReducer,
// 	...(oldState && { preloadedState: oldState }),
// 	middleware,
// 	devTools: process.env.NODE_ENV !== 'production',
// });

export const wrapper = createWrapper(makeStore);
