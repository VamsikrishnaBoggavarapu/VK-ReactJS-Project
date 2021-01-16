import axios from 'axios';

const headers = {
    'Content-Type': 'application.json'
}

const httpClient = axios.create({
    headers
})

const http = (args) => {
    const { url, method = 'GET', data = {} } = args;
    const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';
    return httpClient.request({
        url,
        method,
        [dataOrParams]: data
    })
}

export { http }