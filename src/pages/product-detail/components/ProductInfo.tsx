import { Box, Rating, Stack, Typography, styled } from "@mui/material";
import { FORMAT_CURRENCY } from "helpers/string";
import React, { useMemo } from "react";

type Props = {
  productData?: any;
};

const ProductInfo = (props: Props) => {
  const { productData } = props;
  const productPrice = useMemo(() => {
    var prices = productData?.product_prices || [];
    return prices?.length > 0 ? prices[prices.length - 1] : null;
  }, [productData]);

  const preProductPrice = useMemo(() => {
    var prices = productData?.product_prices || [];
    return prices?.length > 1 ? prices[prices.length - 2] : null;
  }, [productData]);

  const changePrice = useMemo(() => {
    var tmpPrice = productPrice?.price - preProductPrice?.price;
    return isNaN(tmpPrice) ? null : tmpPrice;
  }, [productPrice, preProductPrice]);

  return (
    <StyledStack spacing={1}>
      <Typography className="product-name">{productData.name}</Typography>

      <Stack direction="row" alignItems="center" spacing={4}>
        <Box>
          <Typography className="product-price">
            {FORMAT_CURRENCY(productPrice?.price)}
          </Typography>

          {preProductPrice && (
            <Typography className="pre-product-price">
              {FORMAT_CURRENCY(preProductPrice?.price)}
            </Typography>
          )}
        </Box>

        {changePrice && (
          <Typography
            className="change-product-price"
            sx={{ color: changePrice > 0 ? "red" : "green" }}
          >
            {changePrice > 0 ? "+" : "-"}
            {FORMAT_CURRENCY(changePrice)}
          </Typography>
        )}
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography className="rating">{productData?.rating}/5</Typography>
        <Rating value={productData?.rating || 0} readOnly precision={0.5} />
      </Stack>
    </StyledStack>
  );
};

const StyledStack = styled(Stack)(({ theme }) => ({
  "& .product-name, .product-price": {
    fontWeight: 600,
    fontSize: 24,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },
  "& .product-price": {
    color: "red",
  },
  "& .rating": {
    color: "#faaf00",
  },
  "& .pre-product-price": {
    textDecoration: "line-through",
  },
  "& .change-product-price": {
    fontWeight: 700,
    fontSize: 12,
  },
}));

export default ProductInfo;
