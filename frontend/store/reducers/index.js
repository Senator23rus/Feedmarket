import { combineReducers } from 'redux';
import { catalogReducer } from 'store/reducers/catalog-reducer';
import { baseReducer } from 'store/slices/base-slice';

const reducers = combineReducers({
	catalog: catalogReducer,
	base: baseReducer,
});
export default reducers;
