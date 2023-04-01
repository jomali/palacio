import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { styled, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

export const PADDING_DEFAULT = 3;
export const PADDING_SM = 2;
export const PADDING_XS = 1;

const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  width: "100%",
}));

const Container = React.forwardRef((props, ref) => {
  const { children, maxWidth = "lg", sx, ...otherProps } = props;

  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100%",
      }}>
      <Offset />
      <Divider />
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
          padding: {
            xs: theme.spacing(PADDING_XS),
            sm: theme.spacing(PADDING_SM),
            md: theme.spacing(PADDING_DEFAULT),
          },
          ...sx,
        }}
        {...otherProps}>
        {children}
      </Box>
    </Box>
  );
});

Container.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.oneOf(["lg", "md", "sm", "xl", false]),
};

export default Container;
