import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Zoom from "@mui/material/Zoom";
import PropTypes from "prop-types";
import { useStory } from "components/StoryProvider";

const Storylet = ({ children, options = () => [] }) => {
  const story = useStory();
  const currentOptions = options(story).filter((element) => Boolean(element));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        padding: 0,
      }}>
      {/* Contents */}
      <Box sx={{ flexGrow: 1 }}>{children}</Box>

      {/* Options */}
      <Zoom
        in={Boolean(currentOptions.length)}
        style={{ transitionDelay: "500ms" }}>
        <Stack
          spacing={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: 2,
          }}>
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
