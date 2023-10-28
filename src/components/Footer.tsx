import { Box, Container, Grid, Stack, Typography, styled } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  const contactInfors = {
    title: "Liên hệ",
    children: [
      {
        label: (
          <>
            <a href="https://www.linkedin.com/in/ntn-dev">
              <b>Linkedin</b>
            </a>
          </>
        ),
        href: null,
      },
      { id: 1, label: "trongnghiafes@gmail.com", href: null },
    ],
  };


  return (
    <footer className="border-t-[4px]">
      <StyledContainer className="mx-auto py-[16px] md:py-[32px]">
        <Grid container>
          <Grid item xs={12} md={4}>
            <Typography className="label">NTN Shop</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography className="label">{contactInfors.title}</Typography>
            <Stack>
              {contactInfors.children.map((child, id) => (
                <Box key={id}>{child.label}</Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
        <div className="w-full border-[1px] border-b-[#ddd] my-4" />

        <Typography variant="body2" align="center">
          Copy right: NTN
        </Typography>
      </StyledContainer>
    </footer>
  );
};

const StyledContainer = styled(Container)({
  color: "#aaa",
  "& .label": {
    marginBottom: 16,
    fontWeight: "600",
  },
});

export default Footer;
