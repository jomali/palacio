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
  const { children, menu, title } = props;

  const theme = useTheme();
  const storyState = useStoryState(storylets.initial);

  const [openMenu, setOpenMenu] = React.useState(false);

  const [openRestartConfirmation, setOpenRestartConfirmation] =
    React.useState(false);

  const getTitle = () => {
    const result = title(storyState);
    return result || storyState.currentStorylet.title;
  };

  return (
    <StoryContext.Provider
      value={{
        move: (storylet) => {
          setOpenMenu(false);
          setOpenRestartConfirmation(false);
          storyState.onMove(storylet);
        },
        //
        changeTheme: (themeKey) => null,
        hasVisited: storyState.hasVisited,
        restart: (force) => {
          setOpenMenu(false);
          if (force) {
            storyState.onRestart();
          } else {
            setOpenRestartConfirmation(true);
          }
        },
        setTitle: (newTitle) => null,
        state: storyState.data,
        update: storyState.onUpdate,
      }}
    >
      <ThemeProvider theme={theme}>
        <StatusBar
          onMenuClick={() => setOpenMenu(true)}
          title={getTitle()}
          titleTimeout={
            storyState.data["currentSection"] === 1 ||
            storyState.data["currentSection"] === 2
              ? theme.transitions.duration.standard
              : 0
          }
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

        {children}

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
