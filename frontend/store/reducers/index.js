import { counterReducer } from 'store/reducers/counter-reducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
	counter: counterReducer,
});
export default reducers;
