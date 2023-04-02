import React from "react";
import Link from "@mui/material/Link";

const LoopLink = (props) => {
  const {
    onClick = () => null,
    options = [],
    sx = {},
    value,
    ...otherProps
  } = props;

  return Boolean(options.length) ? (
    <Link
      onClick={() => {
        const selectedIndex =
          options.findIndex((element) => element === value) || 0;
        onClick(options[(selectedIndex + 1) % options.length]);
      }}
      sx={{ cursor: "pointer", ...sx }}
      {...otherProps}>
      {value}
    </Link>
  ) : Boolean(value) ? (
    value
  ) : null;
};

export default LoopLink;
