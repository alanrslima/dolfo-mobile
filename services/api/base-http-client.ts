import axios, {AxiosInstance} from 'axios';

export class BaseHttpClient {
  protected apiInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.apiInstance = axios.create({
      baseURL,
    });
  }

  private async request(
    path: string,
    method: string,
    params: any,
    body?: any,
    headers?: any,
    auth?: any,
  ): Promise<{data: any; status: number}> {
    try {
      const {data, status} = await this.apiInstance(path, {
        method,
        params,
        headers,
        auth,
        data: body,
      });
      return {data, status};
    } catch (error) {
      throw error;
    }
  }

  async get(path: string, params: any, headers?: any, auth?: any) {
    return this.request(path, 'GET', params, null, headers, auth);
  }

  async post(path: string, body: any, headers?: any) {
    return this.request(path, 'POST', null, body, headers);
  }

  async put(path: string, body: any) {
    return this.request(path, 'PUT', null, body);
  }

  async delete(path: string, params?: any) {
    return this.request(path, 'DELETE', params);
  }

  async patch(path: string, params: any) {
    return this.request(path, 'PATCH', params);
  }
}
