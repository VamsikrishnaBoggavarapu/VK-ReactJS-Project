import { SET_RESPONSE_DATA } from '../../constants';

const initialState = {}

const reducer = (state = initialState, { type, payload, apiName }) => {
    switch (type) {
        case SET_RESPONSE_DATA:
            return {
                ...state,
                [apiName]: payload
            }

        default: return state;
    }
}

export default reducer;