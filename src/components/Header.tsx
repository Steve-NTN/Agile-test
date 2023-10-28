import { Menu, Search } from "@mui/icons-material";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { apiGetCategories } from "services/category";
import { CategoryType } from "types/category";

type Props = {};

const Header = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    apiGetCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <StyledBox borderBottom="1px solid #ddd">
      <Container sx={{ p: 2 }}>
        <StyledStack direction="row">
          <Typography className="logo">NTN Shop</Typography>

          <TextField
            placeholder="Dán link hoặc tìm sản phẩm"
            className="searchbox"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />

          <IconButton onClick={() => setShowMenu(true)}>
            <Menu />
          </IconButton>
        </StyledStack>
      </Container>

      <Drawer open={showMenu} onClose={() => setShowMenu(false)}>
        {categories.map((category) => (
          <StyledCategory direction="row" spacing={2} key={category.id}>
            <img src={category.image} alt="img" />
            <Typography>{category.name}</Typography>
          </StyledCategory>
        ))}
      </Drawer>
    </StyledBox>
  );
};

const StyledBox = styled(Box)({
  position: "sticky",
  top: 0,
  backgroundColor: "#fff",
  zIndex: 1,
});

const StyledStack = styled(Stack)({
  "& .content": {},
  justifyContent: "space-between",
  alignItems: "center",
  "& .logo": {
    fontWeight: 600,
    fontSize: 32,
  },
  "& .searchbox": {
    "& input": {
      padding: "8px 24px",
    },
    "& .MuiInputBase-root": {
      borderRadius: 48,
    },
  },
});

const StyledCategory = styled(Stack)({
  alignItems: "center",
  padding: 16,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#ddd",
  },
  "& p": {
    fontWeight: 600,
  },
  "& img": {
    width: 64,
    height: 64,
    objectFit: "cover",
    borderRadius: "50%",
  },
});

export default Header;
