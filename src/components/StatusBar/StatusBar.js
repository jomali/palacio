import React from "react";
import AttributionRoundedIcon from "@mui/icons-material/AttributionRounded";
import Man4RoundedIcon from "@mui/icons-material/Man4Rounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import ManRoundedIcon from "@mui/icons-material/ManRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
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

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const StatusBar = (props) => {
  const { title } = props;

  const theme = useTheme();

  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            sx={{ flexGrow: 1, fontWeight: theme.typography.fontWeightBold }}>
            {title}
          </Typography>
          <IconButton
            aria-label="profile"
            edge="end"
            size="large"
            sx={{ padding: 0 }}>
            <StyledBadge
              anchorOrigin={{ horizontal: "right", vertical: "top" }}
              overlap="circular"
              variant="dot">
              <PersonRoundedIcon fontSize="inherit" />
              {/* <Avatar alt="Remy Sharp" src="03_pixel1.png" /> */}
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default StatusBar;
