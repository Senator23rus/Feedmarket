import { compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from 'store/reducers';
const SET_CLIENT_STATE = 'SET_CLIENT_STATE';

const storeEnhancers =
	(typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const makeStore = ({ isServer }) => {
	if (isServer) {
		return configureStore({
			reducer: reducers,
			// middleware: getDefaultMiddleware =>
			// 	getDefaultMiddleware({
			// 		serializableCheck: {
			// 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			// 		},
			// 	}),
		});
	} else {
		const persistConfig = {
			key: 'nextjs',
			whitelist: ['catalog'],
			storage,
		};

		const reducer = persistReducer(persistConfig, reducers);

		const store = configureStore({
			reducer,
			middleware: getDefaultMiddleware =>
				getDefaultMiddleware({
					serializableCheck: {
						ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
					},
				}),
		});

		// Argument type
		// {enhancers: (next: StoreEnhancerStoreCreator) =>
		// 	StoreEnhancerStoreCreator<{dispatch: ThunkDispatch<any, undefined, AnyAction>}, {}>,
		// 	reducer: Reducer<EmptyObject & PersistPartial, AnyAction>}
		// 	is not assignable to parameter type
		// 	ConfigureStoreOptions<any, AnyAction, [ThunkMiddlewareFor<any>]>

		store.__PERSISTOR = persistStore(store);

		return store;
	}
};

export const wrapper = createWrapper(makeStore);

export const setClientState = clientState => ({
	type: SET_CLIENT_STATE,
	payload: clientState,
});

// import { configureStore } from '@reduxjs/toolkit';
// import reducers from 'store/reducers';
// import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import { createWrapper } from 'next-redux-wrapper';
//
// const rootReducer = reducers;
//
// const logger = createLogger();
//
// const middleware = [thunk];
// if (process.env.NODE_ENV !== 'production') {
// 	console.log(process.env.NODE_ENV);
// 	middleware.push(logger);
// }
//
// const saveState = state => {
// 	try {
// 		const serialisedState = JSON.stringify(state);
// 		window.localStorage.setItem('app_state', serialisedState);
// 	} catch (err) {}
// };
//
// const loadState = () => {
// 	try {
// 		const serialisedState = window.localStorage.getItem('app_state');
// 		if (!serialisedState) return undefined;
// 		return JSON.parse(serialisedState);
// 	} catch (err) {
// 		return undefined;
// 	}
// };
//
// const oldState = loadState();
//
// export const store = configureStore({
// 	reducer: rootReducer,
// 	...(oldState && { preloadedState: oldState }),
// 	middleware,
// 	devTools: process.env.NODE_ENV !== 'production',
// });
//
// export const wrapper = createWrapper();
//
// store.subscribe(() => {
// 	saveState(store.getState());
// });
