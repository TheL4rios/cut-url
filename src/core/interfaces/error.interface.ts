export interface IError {
    error: string;
    message: string;
    response: ErrorResponse;
}

export interface ErrorResponse {
    data:       Data;
    status:     number;
    statusText: string;
    headers:    ErrorResponseHeaders;
    config:     Config;
    request:    Request;
}

export interface Config {
    transitional:      Transitional;
    transformRequest:  null[];
    transformResponse: null[];
    timeout:           number;
    xsrfCookieName:    string;
    xsrfHeaderName:    string;
    maxContentLength:  number;
    maxBodyLength:     number;
    env:               Request;
    headers:           ConfigHeaders;
    baseURL:           string;
    method:            string;
    url:               string;
    data:              string;
}

export interface Request {
}

export interface ConfigHeaders {
    Accept:         string;
    "Content-Type": string;
}

export interface Transitional {
    silentJSONParsing:   boolean;
    forcedJSONParsing:   boolean;
    clarifyTimeoutError: boolean;
}

export interface Data {
    statusCode: number;
    message:    string[];
    error:      string;
}

export interface ErrorResponseHeaders {
    "content-length": string;
    "content-type":   string;
}
