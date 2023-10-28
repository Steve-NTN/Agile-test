import { Box, styled } from "@mui/material";
import { Carousel } from "../../../components";
import { ProductMediaType } from "types/product";

type Props = {
  medias?: ProductMediaType[];
};

const ProductMedia = (props: Props) => {
  const { medias = [] } = props;

  return (
    <StyledBox p={2}>
      <Carousel>
        {medias?.map((media, id) => (
          <div key={id}>
            <img src={media.url} alt="img"/>
          </div>
        ))}
      </Carousel>
    </StyledBox>
  );
};

const StyledBox = styled(Box)({
  border: "1px solid #ddd",
  borderRadius: 8,
  minHeight: 470
});

export default ProductMedia;
