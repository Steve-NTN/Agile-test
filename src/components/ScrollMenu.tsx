import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { IconButton, styled } from "@mui/material";
import { useContext } from "react";
import {
  ScrollMenu as ScrollMenuLib,
  VisibilityContext,
} from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

const ScrollMenu = (props: any) => {
  return (
    <ScrollMenuLib
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      {...props}
      scrollContainerClassName="gap-2 py-2"
      wrapperClassName="relative"
    />
  );
};

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <StyledButton disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <ArrowBackIos />
    </StyledButton>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <StyledButton disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <ArrowForwardIos />
    </StyledButton>
  );
}

const StyledButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  zIndex: 1,
  transform: "translateY(-50%)",
  boxShadow: "0 0 7px -4px"
});

export default ScrollMenu;
