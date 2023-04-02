import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Div100vh from "react-div-100vh";
import { StoryProvider } from "components";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
        accent: "#3c7480",
        contrastText: "#000000",
        main: "#6ba3af",
      },
      secondary: {
        accent: "#D26C2C",
        main: "#1E5D89",
      },
      mode: "light",
    },
  });

  return (
    <Div100vh>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StoryProvider />
      </ThemeProvider>
    </Div100vh>
  );
};

export default App;
