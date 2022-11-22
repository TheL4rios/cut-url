import ApiConfig from '../config/config';

const ApiService = {
    get: (endpoint: string, params?: any): any => ApiConfig.get(endpoint, { params: { ...params }}),
    post: (endpoint: string, body: any): any => ApiConfig.post(endpoint, body),
    put: (endpoint: string, body: any): any => ApiConfig.put(endpoint, body),
    delete: (endpoint: string, params?: any): any => ApiConfig.delete(endpoint, { params: { ...params } }),
};

export default ApiService;