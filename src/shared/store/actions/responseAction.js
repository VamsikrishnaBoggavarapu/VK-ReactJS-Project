import { SET_RESPONSE_DATA } from '../../constants';
import store from '../';

const responseAction = {
    set: ({payload, apiName}) => {
        if (!payload) return;
        const { dispatch } = store;
        dispatch({
            type: SET_RESPONSE_DATA,
            payload,
            apiName
        })
    }
}

export default responseAction;