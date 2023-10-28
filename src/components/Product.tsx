import {
  Box,
  BoxProps,
  Rating,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { FORMAT_CURRENCY } from "helpers/string";
import { Link } from "react-router-dom";

type Props = {
  product?: any;
};

const Product = (props: BoxProps & Props) => {
  const { product } = props;
  return (
    <Link to={`/product/${product?.id}`}>
      <StyledBox {...props}>
        <img src={product?.media?.url} alt="img" className="img" />
        <Stack className="content">
          <Typography className="name">{product?.name}</Typography>
          <Typography className="price">
            {FORMAT_CURRENCY(product?.price)}
          </Typography>
          <Rating value={product?.rating || 0} readOnly  precision={0.5} />
        </Stack>
      </StyledBox>
    </Link>
  );
};

const StyledBox = styled(Box)({
  width: 224,
  boxShadow: "rgba(0, 0, 0, 0.12) 0px 4px 3px, rgba(0, 0, 0, 0.24) 0px 1px 5px",
  borderRadius: 8,
  "& .img": {
    height: "60%",
    width: "100%",
    objectFit: "cover",
  },
  "& .content": {
    "& p": {
      fontWeight: 600,
    },
    padding: 16,
    "& .name": {
      fontSize: 14,
    },
    "& .price": {
      color: "red",
    },
    "& .MuiRating-root": {
      fontSize: 14,
    },
  },
});

export default Product;
