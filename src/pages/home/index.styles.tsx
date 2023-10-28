import { Button, Stack, styled } from "@mui/material";

export const SubmitButton = styled(Button)({});

export const StyledMain = styled(Stack)({
  maxWidth: 460,
  margin: "0 auto",
  "& .error_text": {
    color: "red",
  },
});
