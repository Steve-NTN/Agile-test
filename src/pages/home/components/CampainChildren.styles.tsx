import { Box, styled } from "@mui/material";

export const StyledCampaignBox = styled(Box)<{ error?: boolean }>(
  ({ error = false }) => ({
    border: `1px solid ${error ? "red" : "#ddd"}`,
    padding: 8,
    borderRadius: 8,
    width: "100%",
    "& .ad_box": {
      "& > *": {
        flex: 1,
      },
    },
  })
);
