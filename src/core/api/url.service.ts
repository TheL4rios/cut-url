import ApiService from './api.service';
import { IResponse } from '../interfaces/response.interface';

const source = 'urls';

class UrlService {
    getByCode(code: string): Promise<IResponse<string>> {
        return ApiService.get(`${ source }/${ code }`);
    }

    create(url: string): Promise<IResponse<string>> {
        return ApiService.post(`${ source }`, { url });
    }
}

const urlService = new UrlService();
export default urlService;