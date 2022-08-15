import * as CounterActions from 'store/action-creators/counter';
import { someSliceActions } from 'store/slices/some-slice';
import { userThunk } from 'store/slices/user-slice';
//eslint-disable-next-line
export default {
	...CounterActions,
	...someSliceActions,
};

export const asyncThunks = {
	...userThunk,
};
