import React from "react";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { Container, StatusBar } from "components";
import useDebounce from "components/useDebounce/useDebounce";
import storylets from "storylets";

const ACTION = {
  changeTheme: "changeTheme",
  endRestart: "endRestart",
  endTransition: "endTransition",
  startRestart: "startRestart",
  startTransition: "startTransition",
  update: "update",
};

export const StoryContext = React.createContext();

export const StoryProvider = (props) => {
  const theme = useTheme();

  const blueTheme = createTheme({
    palette: {
      primary: {
        accent: "#3c7480",
        contrastText: "#000000",
        main: "#6ba3af",
      },
      mode: "light",
    },
  });

  const yellowTheme = createTheme({
    palette: {
      primary: {
        accent: "#b17816",
        contrastText: "#000000",
        main: "#e7a748",
      },
      mode: "light",
    },
  });

  const initialState = {
    attributes: {
      intelligence: 5,
      interpersonal: 5,
      locomotion: 5,
      physique: 5,
    },
    lifePoints: 10,
    other: {},
    storylets: {
      current: storylets.initial,
      last: null,
      next: null,
      visited: new Set(),
    },
    theme: theme,
  };

  const [state, dispatch] = React.useReducer((previousState, action) => {
    switch (action.type) {
      case ACTION.changeTheme:
        return {
          ...previousState,
          theme: yellowTheme,
        };
      case ACTION.endRestart:
        return initialState;
      case ACTION.endTransition:
        return {
          ...previousState,
          storylets: {
            ...previousState.storylets,
            current: previousState.storylets.next,
            next: null,
          },
        };
      case ACTION.startRestart:
        return {
          ...previousState,
          restart: true,
          storylets: {
            ...previousState.storylets,
            current: null,
          },
        };
      case ACTION.startTransition:
        const visitedStorylets = previousState.storylets.visited;
        visitedStorylets.add(previousState.storylets.current);
        return {
          ...previousState,
          storylets: {
            current: null,
            last: previousState.storylets.current,
            next: action.payload,
            visited: visitedStorylets,
          },
        };
      case ACTION.update:
        return {
          ...previousState,
          other: {
            ...previousState.other,
            [action.payload?.id]: action.payload.value,
          },
        };
      default:
        return previousState;
    }
  }, initialState);

  const selectedStorylet = storylets.values.find(
    (element) => element.key === state.storylets.current
  );

  const restart = useDebounce(
    state.restart,
    theme.transitions.duration.standard
  );

  React.useEffect(() => {
    if (Boolean(restart)) {
      dispatch({ type: ACTION.endRestart });
    }
  }, [restart]);

  const nextStorylet = useDebounce(
    state.storylets.next,
    theme.transitions.duration.standard
  );

  React.useEffect(() => {
    if (Boolean(nextStorylet)) {
      dispatch({ type: ACTION.endTransition });
    }
  }, [nextStorylet]);

  return (
    <StoryContext.Provider
      value={{
        attributes: state.attributes,
        changeTheme: () =>
          dispatch({
            type: ACTION.changeTheme,
          }),
        go: (storyletKey) =>
          dispatch({
            type: ACTION.startTransition,
            payload: storyletKey,
          }),
        hasVisited: (storyletKey) => state.storylets.visited.has(storyletKey),
        restart: () => dispatch({ type: ACTION.startRestart }),
        state: state.other,
        update: (newValues) =>
          dispatch({
            type: ACTION.update,
            payload: newValues,
          }),
      }}>
      <ThemeProvider theme={state.theme}>
        <Container maxWidth="sm">
          <StatusBar
            onRestart={() => dispatch({ type: ACTION.startRestart })}
            title={selectedStorylet?.title}
          />
          {storylets.values.map((element, index) => (
            <Fade
              direction="up"
              key={element.key}
              in={element.key === state.storylets.current}
              mountOnEnter
              unmountOnExit>
              <Box sx={{ display: "flex", flexGrow: 1 }}>
                {element.storylet}
              </Box>
            </Fade>
          ))}
        </Container>
      </ThemeProvider>
    </StoryContext.Provider>
  );
};
