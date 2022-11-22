import { IError } from '../interfaces/error.interface';

export const getErrorMessage = (error: IError) => {
    if (error.response?.data?.statusCode < 500) {
        return error.response.data.message;
    }

    return 'Something went wrong';
}