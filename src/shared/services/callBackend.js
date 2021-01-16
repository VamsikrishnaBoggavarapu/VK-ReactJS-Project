import isEmpty from 'lodash/isEmpty';
import forEach from 'lodash/forEach';
import { gateWayUrls } from './globalConfig.json';
import { http } from './http';
import { response } from '../store/actions';

const callBackend = async ({
    urls,
    data = {},
    method }) => {

    if (isEmpty(urls)) return;

    const listOfUrls = urls.map(endPoint => {
        const url = gateWayUrls[endPoint];
        console.log(url)
        return http({ url, method, data });
    })

    const responseData = await Promise.allSettled(listOfUrls);

    if (responseData) {
        forEach(responseData, ({ status, value }) => {
            response.set({payload:value.data, apiName:urls})
        });
    }
}

export default callBackend;