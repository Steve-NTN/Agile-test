import http from "./http";

export const apiGetCategories = () => http.get(`/api/category/home/all`);

export const apiGetProductDetail = (id: string) => http.get(`/products/${id}`);

export const apiGetProducts = (id: string) => http.get(`/products?id=${id}`);
