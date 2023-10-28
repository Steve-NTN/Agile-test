import { Home } from "@mui/icons-material"

export const PATHS = {
  HOME: "",
  PRODUCTS: "product",
  PRODUCT_DETAIL(id: string) {
    return `${this.PRODUCTS}/${id}`
  },
}

export const ROUTES = [
  {
    title: "Trang chủ",
    href: PATHS.HOME,
    icon: Home,
  },
  {
    title: "Sản phẩm",
    href: PATHS.PRODUCTS,
  },
]