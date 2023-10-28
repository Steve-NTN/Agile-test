import { Stack, Tab, Tabs, Typography, styled } from "@mui/material";
import React, { useMemo, useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import PriceHistory from "./PriceHistory";
import { ProductDetailType } from "types/product";
import Comments from "./Comments";

type Props = {
  productData?: ProductDetailType;
};

const ProductTabs = (props: Props) => {
  const { productData } = props;

  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    { label: "Lịch sử giá", icon: TrendingUpIcon },
    { label: "Mô tả sản phẩm", icon: InfoOutlinedIcon },
    { label: "Đánh giá từ người mua", icon: ForumOutlinedIcon },
  ];

  const CurrentContent = useMemo(() => {
    switch (selectedTab) {
      case 0:
        return <PriceHistory prices={productData?.product_prices} />;
      case 1:
        return <ProductDescription description={productData?.description} />;

      case 2:
        return <Comments productId={productData?.id}/>;

      default:
        return null;
    }
  }, [selectedTab, productData]);

  return (
    <Stack spacing={2}>
      <StyledTabs
        value={selectedTab}
        onChange={(e, value) => setSelectedTab(value)}
      >
        {tabs.map((tab, id) => {
          let Icon = tab.icon;
          return (
            <Tab
              label={
                <Stack direction="row" spacing={1}>
                  {Icon && <Icon />}
                  <Typography>{tab.label}</Typography>
                </Stack>
              }
              value={id}
            />
          );
        })}
      </StyledTabs>
      {CurrentContent}
    </Stack>
  );
};

const ProductDescription = ({ description = "" }: { description?: string }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: description }}
      style={{ whiteSpace: "pre-wrap" }}
    />
  );
};

const StyledTabs = styled(Tabs)({
  "& .MuiButtonBase-root": {
    textTransform: "initial",
  },
});

export default ProductTabs;
