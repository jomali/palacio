import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import PropTypes from "prop-types";
import { useStory } from "components/StoryProvider";

export const PADDING_DEFAULT = 3;
export const PADDING_SM = 2;
export const PADDING_XS = 1;

const Storylet = ({ children, options = () => [] }) => {
  const story = useStory();
  const theme = useTheme();

  const currentOptions = options(story).filter((element) => Boolean(element));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        margin: 0,
        padding: {
          xs: theme.spacing(PADDING_XS),
          sm: theme.spacing(PADDING_SM),
          md: theme.spacing(PADDING_DEFAULT),
        },
      }}
    >
      {/* Contents */}
      <Box sx={{ flexGrow: 1 }}>{children}</Box>

      {/* Options */}
      <Zoom
        in={Boolean(currentOptions.length)}
        style={{ transitionDelay: theme.transitions.duration.standard * 1.8 }}
      >
        <Stack
          spacing={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: 2,
          }}
        >
          {currentOptions.map((element, index) => (
            <React.Fragment key={`option-${index}`}>{element}</React.Fragment>
          ))}
        </Stack>
      </Zoom>
    </Box>
  );
};

Storylet.propTypes = {
  children: PropTypes.node,
  options: PropTypes.func,
};

export default Storylet;
