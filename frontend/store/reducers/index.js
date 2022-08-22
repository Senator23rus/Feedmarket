import { combineReducers } from 'redux';
import { catalogReducer } from 'store/reducers/catalog-reducer';
import { baseReducer } from 'store/slices/base-slice';
import { userReducer } from 'store/slices/user-slice';

const reducers = combineReducers({
	catalog: catalogReducer,
	base: baseReducer,
	user: userReducer,
});
export default reducers;
