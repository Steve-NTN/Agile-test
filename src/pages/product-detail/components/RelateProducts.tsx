import { Box, BoxProps, Typography } from "@mui/material";
import { Product, ScrollMenu } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetProducts } from "services/product";

const RelateProducts = (props: BoxProps) => {
  const [products, setProducts] = useState<any>([]);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      apiGetProducts(params.id)
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }
  }, [params?.id]);

  return (
    <Box {...props} mb={2}>
      <Typography className="title">Sản phẩm liên quan</Typography>
      <ScrollMenu>
        {products.map((product: any, id: number) => (
          <Product key={id} {...{ product }} />
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default RelateProducts;
