import { SET_PAGE_STATE, CLEAR_PAGE_STATE } from '@shared/constants';
import store from '@@vk';

const page = {
    set: payload => {
        if (!payload) return;
        const { dispatch } = store;
        dispatch({
            type: SET_PAGE_STATE,
            payload
        })
    },
    clear: () => {
        const { dispatch } = store;
        dispatch({
            type: CLEAR_PAGE_STATE
        })
    }
}

export default page;