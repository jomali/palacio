import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import AgilityIcon from "components/icons/Agility";
import ForceIcon from "components/icons/Force";
import IntelligenceIcon from "components/icons/Intelligence";
import RethoricIcon from "components/icons/Rethoric";

const Option = (props) => {
  const {
    buttonVariant = "outlined",
    children,
    difficulty,
    onClick = () => null,
    variant = "default",
    ...otherProps
  } = props;

  const getColor = () => {
    switch (variant) {
      case "intelligence":
        return "intelligence";
      case "interpersonal":
        return "interpersonal";
      case "locomotion":
        return "locomotion";
      case "physique":
        return "physique";
      default:
        return "primary";
    }
  };

  const getIcon = () => {
    switch (variant) {
      case "intelligence":
        return <IntelligenceIcon />;
      case "interpersonal":
        return <RethoricIcon />;
      case "locomotion":
        return <AgilityIcon />;
      case "physique":
        return <ForceIcon />;
      default:
        return null;
    }
  };

  const handleClick = () => {
    return onClick();
  };

  return (
    <Button
      color={getColor()}
      onClick={handleClick}
      startIcon={getIcon()}
      variant={buttonVariant}
      {...otherProps}>
      {children}
    </Button>
  );
};

Option.propTypes = {
  buttonVariant: PropTypes.oneOf(["contained", "default", "outlined"]),
  difficulty: PropTypes.number,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    "default",
    "intelligence",
    "interpersonal",
    "locomotion",
    "physique",
  ]),
};

export default Option;
