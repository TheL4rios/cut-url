import axios from 'axios';

const BASE_URL = process.env.REACT_APP_URL_API;

const ApiConfig = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default ApiConfig;
export {
    BASE_URL
}