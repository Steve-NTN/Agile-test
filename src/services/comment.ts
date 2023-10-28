import http from "./http";

export const apiGetComments = (productId?: number) =>
  http.get(`/comments?product_id=${productId}`);
