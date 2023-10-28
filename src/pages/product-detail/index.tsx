import { Breadcrumb, Footer, Header } from "../../components";
import { Container, Grid } from "@mui/material";
import {
  ProductInfo,
  ProductMedia,
  ProductTabs,
  RelateProducts,
} from "./components";
import { useEffect, useState } from "react";
import { apiGetProductDetail } from "services/product";
import { useParams } from "react-router-dom";
import { ProductDetailType } from "types/product";

type Props = {};

const ProductDetail = (props: Props) => {
  const params = useParams();
  const [productData, setProductData] = useState<ProductDetailType>({
    id: parseInt(params.id || ""),
    product_medias: [],
    product_prices: [],
  });

  useEffect(() => {
    if (params.id) {
      apiGetProductDetail(params.id)
        .then((res) => setProductData(res.data))
        .catch((err) => console.log("first"));
    }
  }, [params.id]);

  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Breadcrumb sx={{ mb: 2 }} />
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} md={4}>
            <ProductMedia medias={productData?.product_medias} />
          </Grid>
          <Grid item xs={12} md={8}>
            <ProductInfo {...{ productData }} />
          </Grid>
        </Grid>
        <ProductTabs {...{ productData }} />
        <RelateProducts mt={4} />
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetail;
