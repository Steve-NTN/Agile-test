import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, BreadcrumbsProps, Link, styled } from "@mui/material";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";


const Breadcrumb = (props: BreadcrumbsProps) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/");

  const breadcrumbItems = useMemo(() => {
    return pathSnippets.map((i) => {
      var selectedRoute = ROUTES.find((r) => i === r.href) || {
        title: i,
        icon: null,
      };

      return {
        href: i,
        label: selectedRoute?.title,
        icon: selectedRoute?.icon,
      };
    });
  }, [pathSnippets]);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNext fontSize="small" />}
      {...props}
    >
      {breadcrumbItems.map((item) => {
        let Icon = item.icon;
        return (
          <StyledLink href={item.href} key={item.href} sx={{ display: "flex" }}>
            {Icon && <Icon fontSize="small" />}
            {item.label}
          </StyledLink>
        );
      })}
    </Breadcrumbs>
  );
};

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "initial",
  gap: 8
});

export default Breadcrumb;
