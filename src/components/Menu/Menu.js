import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useStory } from "components/StoryProvider";

export const DRAWER_WIDTH = 260; // px

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MenuItemButton = styled(ListItemButton)(({ selected, theme }) => ({
  ...(selected && {
    borderLeft: `${theme.spacing(0.5)} solid ${theme.palette.primary.main}`,
    paddingLeft: theme.spacing(1.5),
    "& .MuiListItemIcon-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiTypography-root": {
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
}));

const Menu = (props) => {
  const { onClose, open, values = [], ...otherProps } = props;

  const story = useStory();
  const theme = useTheme();

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={open}
      variant="temporary"
      {...otherProps}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: DRAWER_WIDTH,
        }}
      >
        <DrawerHeader>
          <IconButton onClick={onClose} size="medium">
            <CloseRoundedIcon fontSize="inherit" />
          </IconButton>
        </DrawerHeader>
        <List>
          {values.map((element, index) => (
            <ListItem disablePadding key={`menu-item-${index}`}>
              <MenuItemButton
                onClick={() => {
                  element.onClick();
                  onClose();
                }}
                selected={element.selected}
              >
                <ListItemIcon>{element.icon}</ListItemIcon>
                <ListItemText primary={element.label} />
              </MenuItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => story.restart()}>
              <ListItemIcon>
                <ReplayRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={"Reiniciar"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Box sx={{ display: "flex", flexGrow: 1 }} />
        <Typography
          sx={{
            alignSelf: "end",
            color: theme.palette.text.secondary,
            margin: theme.spacing(1),
          }}
        >
          {process.env.REACT_APP_VERSION}
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Menu;
