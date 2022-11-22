export interface IResponse<T> {
    status: number;
    data: T;
    request: {
        _url: string;
    };
}