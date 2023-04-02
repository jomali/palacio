import React from "react";
import Link from "@mui/material/Link";

const LoopLink = (props) => {
  const { onClick = () => null, values = [], ...otherProps } = props;

  const [selected, setSelected] = React.useState(0);

  return Boolean(values.length) ? (
    <Link
      onClick={() => {
        const newValue = (selected + 1) % values.length;
        setSelected(newValue);
        onClick(newValue);
      }}
      sx={{
        cursor: "pointer",
      }}>
      {values[selected]}
    </Link>
  ) : null;
};

export default LoopLink;
