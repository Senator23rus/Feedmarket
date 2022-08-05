import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncThunks } from 'store/action-creators';

export const useAsyncThunk = () => {
	const dispatch = useDispatch();
	return bindActionCreators(asyncThunks, dispatch);
};
