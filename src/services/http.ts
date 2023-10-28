import { DOMAIN } from "../constants/schema";
import axios from "axios";

declare module "axios" {
  export interface AxiosInstance {
    request<T = any, R = AxiosResponse<T>>(
      config: AxiosRequestConfig
    ): Promise<R>;
    get<T = any, R = AxiosResponse<T>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>;
    delete<T = any, R = AxiosResponse<T>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>;
    head<T = any, R = AxiosResponse<T>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>;
    options<T = any, R = AxiosResponse<T>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>;
    post<T = any, R = AxiosResponse<T>>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<R>;
    put<T = any, R = AxiosResponse<T>>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<R>;
    patch<T = any, R = AxiosResponse<T>>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<R>;
  }
}

const http = axios.create({
  baseURL: DOMAIN,
  headers: {
    "Content-Type": undefined,
    Accept: "application/json",
  },
});

export default http;
