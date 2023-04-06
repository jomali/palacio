import React from "react";
import Fade from "@mui/material/Fade";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { Container, StatusBar } from "components";
import Menu from "components/Menu";
import storylets from "storylets";
import RestartConfirmationDialog from "./RestartConfirmationDialog";
import useStoryState from "./useStoryState";

export const StoryContext = React.createContext();

export const StoryProvider = (props) => {
  const { children, initialState, menu, renderTitle } = props;

  const theme = useTheme();
  const storyState = useStoryState(storylets.initial, initialState);

  const [openMenu, setOpenMenu] = React.useState(false);

  const [openRestartConfirmation, setOpenRestartConfirmation] =
    React.useState(false);

  const story = {
    currentStorylet: storyState.currentStorylet,
    data: storyState.data,
    hasVisited: storyState.hasVisited,
    move: (storylet) => {
      setOpenMenu(false);
      setOpenRestartConfirmation(false);
      storyState.onMove(storylet);
    },
    restart: (force) => {
      setOpenMenu(false);
      if (force) {
        storyState.onRestart();
      } else {
        setOpenRestartConfirmation(true);
      }
    },
    update: storyState.onUpdate,
    //
    changeTheme: (themeKey) => null,
    state: storyState.data,
  };

  return (
    <StoryContext.Provider value={story}>
      <ThemeProvider theme={theme}>
        <StatusBar
          onMenuClick={() => setOpenMenu(true)}
          title={
            renderTitle(storyState.data) || storyState.currentStorylet.title
          }
          TitleProps={{
            timeout:
              renderTitle(storyState.data) &&
              theme.transitions.duration.standard,
          }}
        />
        {storylets.values.map((element, index) => (
          <Fade
            key={element.key}
            in={
              !Boolean(storyState.data["currentSection"]) &&
              element.key === storyState.currentStorylet.key
            }
            mountOnEnter
            unmountOnExit
          >
            <Container maxWidth="sm" openMenu={openMenu}>
              {element.storylet}
            </Container>
          </Fade>
        ))}

        {typeof children === "function" ? children(story) : children}

        <Menu
          onClose={() => setOpenMenu(false)}
          open={openMenu}
          values={menu(storyState)}
        />

        <RestartConfirmationDialog
          onAccept={() => {
            setOpenRestartConfirmation(false);
            storyState.onRestart();
          }}
          onClose={() => setOpenRestartConfirmation(false)}
          open={openRestartConfirmation}
        />
      </ThemeProvider>
    </StoryContext.Provider>
  );
};
