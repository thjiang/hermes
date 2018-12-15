import axios from 'axios';
import util from './util';

let baseURL = 'https://www.163.com/';

const service = axios.create({
    baseURL: baseURL,
    timeout: 60000,
    headers: {
        // "Content-Type": "application/x-www-form-urlencoded"
        // "X-CSRF-Token": util.getCookie('CVR_C') ? util.getCookie('CVR_C') : null
    },
    withCredentials: true
});

service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default service;
