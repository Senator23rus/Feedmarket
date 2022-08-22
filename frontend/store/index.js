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
import { createWrapper } from 'next-redux-wrapper';
import { useStore } from 'react-redux';

// import { createWrapper, HYDRATE } from 'next-redux-wrapper';
// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import reducers from 'store/reducers';
// // // import { persistReducer } from 'redux-persist';
// // // import storage from 'redux-persist/lib/storage';
import { logger } from 'redux-logger';
// // const SET_CLIENT_STATE = 'SET_CLIENT_STATE';
// // // const storeEnhancers =
// // // 	(typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
// // // 	compose;
// // //
// // // const persistConfig = {
// // // 	key: 'root',
// // // 	storage,
// // // 	whitelist: ['catalog', 'base', 'user'],
// // // };
// // // const rootReducer = persistReducer(persistConfig, reducers);
// //
// // const middleware = [thunk];
// // if (process.env.NODE_ENV === 'development') {
// // 	middleware.push(logger);
// // }
// //
// // const preloadedState = loadState();
// // // if (isServer) {
// // const store = configureStore({
// // 	reducer: reducers,
// // 	middleware,
// // 	// middleware: getDefaultMiddleware =>
// // 	// 	getDefaultMiddleware({
// // 	// 		serializableCheck: {
// // 	// 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// // 	// 		},
// // 	// 	}),
// // });
// //
// // const makeStore = () => {
// // 	// const oldState = loadState();
// // 	// const reducer = (state, action) => {
// // 	// 	if (action.type === HYDRATE) {
// // 	// 		return {
// // 	// 			...state, // use previous state
// // 	// 			...action.payload, // apply delta from hydration
// // 	// 		};
// // 	// 	} else {
// // 	// 		return reducers(state, action);
// // 	// 	}
// // 	// };
// // 	//
// // 	// const preloadedState = loadState();
// // 	// // if (isServer) {
// // 	// const store = configureStore({
// // 	// 	reducer: reducers,
// // 	// 	middleware,
// // 	// 	...(preloadedState ? preloadedState : {}),
// // 	// 	// middleware: getDefaultMiddleware =>
// // 	// 	// 	getDefaultMiddleware({
// // 	// 	// 		serializableCheck: {
// // 	// 	// 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// // 	// 	// 		},
// // 	// 	// 	}),
// // 	// });
// //
// // 	return store;
// // 	// } else {
// // 	// 	return  configureStore({
// // 	// 		reducer: rootReducer,
// // 	// 		middleware,
// // 	// 		// : getDefaultMiddleware =>
// // 	// 		// 			getDefaultMiddleware({
// // 	// 		// 				serializableCheck: {
// // 	// 		// 					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// // 	// 		// 				},
// // 	// 		// 			}),
// // 	// 	});
// // 	//
// // 	// 	// Argument type
// // 	// 	// {enhancers: (next: StoreEnhancerStoreCreator) =>
// // 	// 	// 	StoreEnhancerStoreCreator<{dispatch: ThunkDispatch<any, undefined, AnyAction>}, {}>,
// // 	// 	// 	reducer: Reducer<EmptyObject & PersistPartial, AnyAction>}
// // 	// 	// 	is not assignable to parameter type
// // 	// 	// 	ConfigureStoreOptions<any, AnyAction, [ThunkMiddlewareFor<any>]>
// // 	//
// // 	// 	// store.subscribe(() => {
// // 	// 	// 	saveState(store.getState());
// // 	// 	// });
// // 	//
// // 	// }
// // };
// // //
// // // export const wrapper = createWrapper(makeStore);
// // //
// // // export const setClientState = clientState => ({
// // // 	type: SET_CLIENT_STATE,
// // // 	payload: clientState,
// // // });
// //
// // // import { configureStore } from '@reduxjs/toolkit';
// // // import reducers from 'store/reducers';
// // // import thunk from 'redux-thunk';
// // // import { createLogger } from 'redux-logger';
// // // import { createWrapper } from 'next-redux-wrapper';
// // //
// // // const rootReducer = reducers;
// // //
// // function saveState(state) {
// // 	try {
// // 		const serialisedState = JSON.stringify(state);
// // 		window.localStorage.setItem('app_state', serialisedState);
// // 	} catch (err) {}
// // }
// //
// // function loadState() {
// // 	try {
// // 		const serialisedState = window.localStorage.getItem('app_state');
// // 		if (!serialisedState) return undefined;
// // 		return JSON.parse(serialisedState);
// // 	} catch (err) {
// // 		return undefined;
// // 	}
// // }
// //
// // // store.subscribe(() => {
// // // 	saveState(store.getState());
// // // });
// //
// // // export const store = configureStore({
// // // 	reducer: rootReducer,
// // // 	...(oldState && { preloadedState: oldState }),
// // // 	middleware,
// // // 	devTools: process.env.NODE_ENV !== 'production',
// // // });
// //
// // export const wrapper = createWrapper(() => store);
// const middleware = [thunk];
// if (process.env.NODE_ENV === 'development') {
// 	middleware.push(logger);
// }
//
// const makeStore = () =>
// 	configureStore({
// 		reducer: reducers,
// 		middleware,
// 		devTools: true,
// 	});
//
// export const wrapper = createWrapper(makeStore);

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	whitelist: ['user'],
};

// const persistedReducer = persistReducer(persistConfig, reducers);
//
// console.log();
// const makeStore = () => {
// 	return configureStore({
// 		reducer: persistedReducer,
// 		middleware: getDefaultMiddleware =>
// 			getDefaultMiddleware({
// 				serializableCheck: {
// 					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 				},
// 			}),
// 	});
// };
// export const wrapper = createWrapper(makeStore);
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(logger),
	devTools: process.env.NEXT_PUBLIC_NODE_ENV !== 'production',
});

const setupStore = context => store;

const makeStore = context => setupStore(context);

export const persistor = persistStore(store);

export const wrapper = createWrapper(makeStore);
