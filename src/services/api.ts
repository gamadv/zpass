import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class ApiService {
    private apiConfig: AxiosInstance;

    constructor(baseURL: string) {
        this.apiConfig = axios.create({ baseURL });
        this.apiConfig.interceptors.response.use(
            response => response,
            error => {
                if (error.response) {
                    console.error(`API Error: ${error.response.status}`, error.response.data);
                    return Promise.reject(error.response.data);
                } else if (error.request) {
                    console.error('Sem resposta da API', error.request);
                    return Promise.reject('Sem resposta da API');
                } else {
                    console.error('Error da request', error.message);
                    return Promise.reject(error.message);
                }
            }
        );
    }

    public async postData<T>(
        url: string,
        data: T,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse> {
        return this.apiConfig.post(url, data, config);
    }
}
