import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import AgilityIcon from "components/icons/Agility";
import ForceIcon from "components/icons/Force";
import IntelligenceIcon from "components/icons/Intelligence";
import RethoricIcon from "components/icons/Rethoric";
import { useStory } from "components/StoryProvider";

const Option = (props) => {
  const {
    buttonVariant = "outlined",
    children,
    difficulty,
    inactive,
    onClick = () => null,
    storylet,
    variant = "default",
    ...otherProps
  } = props;

  const story = useStory();

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

  return !inactive ? (
    <Button
      color={getColor()}
      onClick={() => (Boolean(storylet) ? story.go(storylet) : onClick())}
      startIcon={getIcon()}
      variant={buttonVariant}
      {...otherProps}>
      {children}
    </Button>
  ) : null;
};

Option.propTypes = {
  buttonVariant: PropTypes.oneOf(["contained", "default", "outlined"]),
  difficulty: PropTypes.number,
  inactive: PropTypes.bool,
  onClick: PropTypes.func,
  storylet: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "intelligence",
    "interpersonal",
    "locomotion",
    "physique",
  ]),
};

export default Option;
