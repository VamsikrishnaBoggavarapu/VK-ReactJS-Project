import { GET, POST } from '@shared/constants';
import callBackend from '@shared/services/callBackend';

const apiAction = {
    get: async props => { await callBackend({ urls: [props?.url], ...props, method: GET }) },
    post: async props => { await callBackend({ urls: [props?.url], ...props, method: POST }) }
}

export default apiAction;