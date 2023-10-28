import { Box, Stack, Typography, styled } from "@mui/material";
import { FORMAT_CURRENCY, FORMAT_DATETIME } from "helpers/string";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ProductPriceType } from "types/product";
import { useMemo } from "react";

type Props = {
  prices?: ProductPriceType[];
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PriceHistory = (props: Props) => {
  const { prices = [] } = props;
  const data = useMemo(
    () => ({
      labels: prices?.map((price) => FORMAT_DATETIME(price.time_created, "date")) || [],
      datasets: [
        {
          data: prices?.map((price) => price.price) || [],
        },
      ],
    }),
    [prices]
  );

  return (
    <Box>
      <Stack direction="row" spacing={2} alignItems="center">
        <StyledBox flex={1}>
          <Stack spacing={2} direction="row" justifyContent="space-between">
            <Typography className="title">Biến động giá</Typography>
            <Typography className="price">
              Giá hiện tại: <span>{FORMAT_CURRENCY(500000)}</span>
            </Typography>
          </Stack>
          <Line options={options} data={data} />
        </StyledBox>
        <StyledBox>Số lần thay đổi giá: {prices.length} lần</StyledBox>
      </Stack>
    </Box>
  );
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        callback: function (value: any) {
          return FORMAT_CURRENCY(value);
        },
      },
    },
  },
};

const StyledBox = styled(Box)({
  border: "1px solid #cd7740",
  padding: 16,
  borderRadius: 8,
  "& .title": {
    fontWeight: 600,
    color: "#cd7740",
  },
  "& .price": {
    "& span": {
      fontWeight: 600,
    },
  },
});

export default PriceHistory;
