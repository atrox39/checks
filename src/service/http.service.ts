import axios from 'axios';

const BASE_API = axios.create({
  baseURL: process.env.API_URL,
});

export class HttpService {
  static async get(url: string) {
    try {
      return BASE_API.get(url);
    } catch(error: any) {
      return {
        data: error.response.data,
      };
    }
  }
}