import React from "react";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { useTheme } from "@mui/material/styles";
import { Container, StatusBar } from "components";
import useDebounce from "components/useDebounce/useDebounce";
import storylets from "storylets";

const ACTION = {
  endRestart: "endRestart",
  endTransition: "endTransition",
  startRestart: "startRestart",
  startTransition: "startTransition",
};

export const StoryContext = React.createContext();

export const StoryProvider = (props) => {
  const initialState = {
    attributes: {
      intelligence: 5,
      interpersonal: 5,
      locomotion: 5,
      physique: 5,
    },
    lifePoints: 10,
    storylets: {
      current: storylets.initial,
      last: null,
      next: null,
      visited: new Set(),
    },
  };
  const theme = useTheme();

  const [state, dispatch] = React.useReducer((previousState, action) => {
    switch (action.type) {
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
        visitedStorylets.add(action.payload);
        return {
          ...previousState,
          storylets: {
            current: null,
            last: previousState.storylets.current,
            next: action.payload,
            visited: visitedStorylets,
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
        ...state,
        go: (storyletKey) =>
          dispatch({
            type: ACTION.startTransition,
            payload: storyletKey,
          }),
        hasVisited: (storyletKey) => state.storylets.visited.has(storyletKey),
      }}>
      <Container maxWidth="sm">
        <StatusBar
          onRestart={() => dispatch({ type: ACTION.startRestart })}
          title={selectedStorylet?.title}
        />
        {storylets.values.map((element, index) => (
          <Slide
            direction="up"
            key={element.key}
            in={element.key === state.storylets.current}
            mountOnEnter
            unmountOnExit>
            <Box sx={{ display: "flex", flexGrow: 1 }}>{element.storylet}</Box>
          </Slide>
        ))}
      </Container>
    </StoryContext.Provider>
  );
};
