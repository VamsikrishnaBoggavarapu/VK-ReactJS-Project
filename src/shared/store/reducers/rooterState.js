import { SET_ROUTER_STATE, CLEAR_ROUTER_STATE } from '../../constants';

const initialState = {};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_ROUTER_STATE:
            return {
                ...state,
                ...payload
            }
        case CLEAR_ROUTER_STATE:
            return {};
        default:
            return state;
    }
}

export default reducer;