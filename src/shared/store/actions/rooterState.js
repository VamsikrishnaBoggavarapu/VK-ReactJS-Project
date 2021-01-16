import { SET_ROUTER_STATE, CLEAR_ROUTER_STATE } from '../../constants';
import store from '../store';

const rooterState = {
    set: payload => {
        const { dispatch } = store;
        if (!payload) return;

        dispatch({
            type: SET_ROUTER_STATE,
            payload
        });
    },
    clear: () => {
        const { dispatch } = store;

        dispatch({
            type: CLEAR_ROUTER_STATE
        });
    }
}

export default rooterState;