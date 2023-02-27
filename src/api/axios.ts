import axios, { AxiosInstance } from 'axios';
import { parseCookies } from 'nookies';
export function getAPIClient(ctx = undefined) {
   const { token: token } = parseCookies(ctx);

   const api: AxiosInstance = axios.create({
      baseURL:
      import.meta.env.AMBIENTE === 'dev'
            ? import.meta.env.BASE_URL_DEV
            : import.meta.env.BASE_URL_LOCAL,
   });
   api.interceptors.request.use((config) => {
      return config;
   });
   if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
   }

   return api;
}
