import React from "react";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import PsychologyAltRoundedIcon from "@mui/icons-material/PsychologyAltRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Div100vh from "react-div-100vh";
import { StoryProvider } from "components";
import { NotificationProvider } from "components/NotificationProvider";
import memory from "sections/memories/memory";
import Recuerdos from "sections/memories/Recuerdos";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const INVENTORY_SECTION = 1;
const MEMORIES_SECTION = 2;

const App = () => {
  const theme = createTheme({
    palette: {
      intelligence: {
        accent: "#3c7480",
        contrastText: "#000000",
        main: "#6ba3af",
      },
      interpersonal: {
        accent: "#812199",
        contrastText: "#000000",
        main: "#b354ca",
      },
      locomotion: {
        accent: "#b17816",
        contrastText: "#000000",
        main: "#e7a748",
      },
      physique: {
        accent: "#df020b",
        contrastText: "#000000",
        main: "#ff5439",
      },
      primary: {
        // "#888888", #CFF5F8
        // "#BBBBBB", #FF3FA4
        main: "#b354ca",
      },
      secondary: {
        main: "#888888",
      },
      mode: "light",
    },
  });

  return (
    <Div100vh>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NotificationProvider autoHideDuration={2000}>
          <StoryProvider
            initialState={{ memories: Object.values(memory) }}
            menu={(story) => [
              {
                icon: <CottageRoundedIcon />,
                label: "La casa",
                onClick: () => {
                  story.onUpdate({
                    id: "currentSection",
                    value: undefined,
                  });
                  story.onMove();
                },
                selected:
                  !Boolean(story.data["currentSection"]) ||
                  story.data["currentSection"] === 0,
              },
              {
                icon: <WorkRoundedIcon />,
                label: "Contenidos del bolso",
                onClick: () => {
                  story.onUpdate({
                    id: "currentSection",
                    value: INVENTORY_SECTION,
                  });
                  story.onMove();
                },
                selected: story.data["currentSection"] === INVENTORY_SECTION,
              },
              {
                icon: <PsychologyAltRoundedIcon />,
                label: "Recuerdos",
                onClick: () => {
                  story.onUpdate({
                    id: "currentSection",
                    value: MEMORIES_SECTION,
                  });
                  story.onMove();
                },
                selected: story.data["currentSection"] === MEMORIES_SECTION,
              },
            ]}
            renderTitle={(storyData) => {
              switch (storyData["currentSection"]) {
                case INVENTORY_SECTION:
                  return "Contenidos del bolso";
                case MEMORIES_SECTION:
                  return "Recuerdos";
                default:
                  return false;
              }
            }}
          >
            {(story) => (
              <Recuerdos
                visible={story.data["currentSection"] === MEMORIES_SECTION}
              />
            )}
          </StoryProvider>
        </NotificationProvider>
      </ThemeProvider>
    </Div100vh>
  );
};

export default App;
