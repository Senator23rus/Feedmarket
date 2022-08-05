import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { syncActions } from "../store/action-creators";

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(syncActions, dispatch);
};
