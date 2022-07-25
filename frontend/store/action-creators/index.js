import * as CounterActions from 'store/action-creators/counter';
import { someSliceActions } from 'store/slices/some-slice';
//eslint-disable-next-line
export default {
	...CounterActions,
	...someSliceActions,
};
