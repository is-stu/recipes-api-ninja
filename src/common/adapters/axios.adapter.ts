import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;
  async get<T>(url: string, headers?: any): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url, {
        ...headers,
        headers: {
          'x-rapidapi-key': process.env.API_KEY,
          'x-rapidapi-host': process.env.API_HOST,
        },
      });
      return data;
    } catch (error) {
      throw new Error(`Error on get ${url}`);
    }
  }
}
