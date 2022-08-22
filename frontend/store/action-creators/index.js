import * as CounterActions from 'store/action-creators/counter';
import { someSliceActions } from 'store/slices/some-slice';
import {WelcomePageAddCommentAction} from "store/action-creators/welcomePageAddCommentAction";
import {welcomePageSlice} from "store/slices/welcomePageSlice";
//eslint-disable-next-line
export const syncActions = {
	...CounterActions,
	...someSliceActions,
	...welcomePageSlice,
};

export const asyncActions = {
	WelcomePageAddCommentAction,
}
