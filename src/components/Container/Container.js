import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { styled, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
// import { DRAWER_WIDTH } from "../Drawer";

const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  width: "100%",
}));

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "openMenu",
})(({ theme, openMenu }) => ({
  // display: "flex",
  // flexDirection: "column",
  // justifyContent: "center",
  // minHeight: "100%",
  // transition: theme.transitions.create("margin", {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.leavingScreen,
  // }),
  // marginRight: -DRAWER_WIDTH,
  // ...(openMenu && {
  //   transition: theme.transitions.create("margin", {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  //   marginRight: 0,
  // }),
}));

const Container = React.forwardRef((props, ref) => {
  const { children, maxWidth = "lg", openMenu, sx, ...otherProps } = props;

  const theme = useTheme();

  return (
    <Main
      openMenu={openMenu}
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "center",
        minHeight: "100%",
      }}
    >
      <Offset />
      {/* <Divider /> */}
      <Box
        ref={ref}
        sx={{
          alignSelf: "center",
          display: "flex",
          flexGrow: 1,
          margin: 0,
          maxWidth: {
            xs: "100%",
            sm: maxWidth === "sm" ? theme.breakpoints.values.sm : undefined,
            md: maxWidth === "md" ? theme.breakpoints.values.md : undefined,
            lg: maxWidth === "lg" ? theme.breakpoints.values.lg : undefined,
            xl: maxWidth === "xl" ? theme.breakpoints.values.xl : undefined,
          },
          minWidth: {
            xs: "100%",
            sm: maxWidth === "sm" ? theme.breakpoints.values.sm : undefined,
            md: maxWidth === "md" ? theme.breakpoints.values.md : undefined,
            lg: maxWidth === "lg" ? theme.breakpoints.values.lg : undefined,
            xl: maxWidth === "xl" ? theme.breakpoints.values.xl : undefined,
          },
          padding: 0,
          position: "relative",
          ...sx,
        }}
        {...otherProps}
      >
        {children}
      </Box>
    </Main>
  );
});

Container.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.oneOf(["lg", "md", "sm", "xl", false]),
};

export default Container;
