export type ProductMediaType = {
  id: number;
  url: string;
};

export type ProductPriceType = {
  id: number;
  price: number;
  time_created: string;
};

export type ProductDetailType = {
  id: number;
  description?: string;
  product_medias: ProductMediaType[];
  product_prices: ProductPriceType[];
};
