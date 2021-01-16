import { SET_PAGE_STATE, CLEAR_PAGE_STATE } from '../../constants';

const initialState = {};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PAGE_STATE:
            return {
                ...state,
                ...payload
            }
        case CLEAR_PAGE_STATE:
            return {}
        default:
            return state;
    }
}

export default reducer;