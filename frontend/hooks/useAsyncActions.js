import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { asyncActions } from "../store/action-creators/index";

export const useAsyncAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(asyncActions, dispatch);
};
