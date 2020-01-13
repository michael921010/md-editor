import Axios from 'axios';

const request = Axios.create({
    baseURL: '/api',
});

export default request;
