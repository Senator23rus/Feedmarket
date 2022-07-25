import { combineReducers } from 'redux';
import { catalogReducer } from 'store/reducers/catalog-reducer';

const reducers = combineReducers({
	catalog: catalogReducer,
});
export default reducers;
