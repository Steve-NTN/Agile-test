import http from "./http";

export const apiGetCategories = () => http.get(`/categories`);
