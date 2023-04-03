import React from "react";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const ElevationScroll = (props) => {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
  });
};

const StatusBar = (props) => {
  const { onRestart, title } = props;

  const theme = useTheme();

  return (
    <ElevationScroll>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.default,
          color: "black",
        }}>
        <Toolbar>
          <Typography
            sx={{ flexGrow: 1, fontWeight: theme.typography.fontWeightBold }}>
            {title}
          </Typography>
          <IconButton
            aria-label="profile"
            edge="end"
            onClick={onRestart}
            size="large"
            sx={{ padding: 0 }}>
            <ReplayRoundedIcon fontSize="inherit" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default StatusBar;
