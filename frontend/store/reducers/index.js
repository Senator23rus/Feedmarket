import { combineReducers } from 'redux';
import { catalogReducer } from 'store/reducers/catalog-reducer';
import WelcomePageSlice from "store/slices/welcomePageSlice";

const reducers = combineReducers({
	catalog: catalogReducer,
	welcomePage: WelcomePageSlice,
});
export default reducers;
