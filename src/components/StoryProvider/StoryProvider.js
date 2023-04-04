import React from "react";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import PsychologyAltRoundedIcon from "@mui/icons-material/PsychologyAltRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { Container, StatusBar } from "components";
import Menu from "components/Menu";
import storylets from "storylets";
import Inventario from "storylets/Inventario";
import Recuerdos from "storylets/Recuerdos";
import RestartConfirmationDialog from "./RestartConfirmationDialog";
import useStoryState from "./useStoryState";

export const StoryContext = React.createContext();

export const StoryProvider = (props) => {
  const theme = useTheme();
  const storyState = useStoryState(storylets.initial);

  const [openMenu, setOpenMenu] = React.useState(false);

  const [openRestartConfirmation, setOpenRestartConfirmation] =
    React.useState(false);

  const getTitle = () => {
    if (storyState.data["currentSection"] === 1) {
      return Inventario.title;
    } else if (storyState.data["currentSection"] === 2) {
      return Recuerdos.title;
    } else {
      return storylets.values.find(
        (element) => element.key === storyState.currentStorylet
      )?.title;
    }
  };

  return (
    <StoryContext.Provider
      value={{
        changeTheme: (themeKey) => null,
        go: storyState.onMove,
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
        <Container maxWidth="sm" openMenu={openMenu}>
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
                element.key === storyState.currentStorylet
              }
              mountOnEnter
              unmountOnExit
            >
              <Box sx={{ display: "flex", flexGrow: 1 }}>
                {element.storylet}
              </Box>
            </Fade>
          ))}

          <Fade
            in={storyState.data["currentSection"] === 1}
            mountOnEnter
            style={{
              transitionDelay:
                storyState.data["currentSection"] === 1
                  ? theme.transitions.duration.standard
                  : "0ms",
            }}
            unmountOnExit
          >
            <Box
              sx={{
                backgroundColor: theme.palette.background.paper,
                display: "flex",
                height: "100%",
                width: "100%",
                position: "absolute",
              }}
            >
              {Inventario.storylet}
            </Box>
          </Fade>

          <Fade
            in={storyState.data["currentSection"] === 2}
            mountOnEnter
            style={{
              transitionDelay:
                storyState.data["currentSection"] === 2
                  ? theme.transitions.duration.standard
                  : "0ms",
            }}
            unmountOnExit
          >
            <Box
              sx={{
                backgroundColor: theme.palette.background.paper,
                display: "flex",
                height: "100%",
                width: "100%",
                position: "absolute",
              }}
            >
              {Recuerdos.storylet}
            </Box>
          </Fade>
        </Container>

        <Menu
          onClose={() => setOpenMenu(false)}
          open={openMenu}
          values={[
            {
              icon: <CottageRoundedIcon />,
              label: "La casa",
              onClick: () => {
                storyState.onUpdate({ id: "currentSection", value: undefined });
                storyState.onMove();
              },
              selected:
                !Boolean(storyState.data["currentSection"]) ||
                storyState.data["currentSection"] === 0,
            },
            {
              icon: <WorkRoundedIcon />,
              label: "Contenidos del bolso",
              onClick: () => {
                storyState.onUpdate({ id: "currentSection", value: 1 });
                storyState.onMove();
              },
              selected: storyState.data["currentSection"] === 1,
            },
            {
              icon: <PsychologyAltRoundedIcon />,
              label: "Recuerdos",
              onClick: () => {
                storyState.onUpdate({ id: "currentSection", value: 2 });
                storyState.onMove();
              },
              selected: storyState.data["currentSection"] === 2,
            },
          ]}
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
