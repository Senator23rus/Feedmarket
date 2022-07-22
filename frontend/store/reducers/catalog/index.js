import { combineReducers } from 'redux';
import { CattleReducer } from 'store/reducers/catalog/cattle-reducer';
import { PoultryReducer } from 'store/reducers/catalog/poultry-reducer';
import { RawMaterialReducer } from 'store/reducers/catalog/raw-material-reducer';
import { PigReducer } from 'store/reducers/catalog/pig-reducer';

const catalogReducers = combineReducers({
	cattle: CattleReducer,
	poultry: PoultryReducer,
	raw: RawMaterialReducer,
	pig: PigReducer,
});
export default catalogReducers;
