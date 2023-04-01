import React from "react";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { useTheme } from "@mui/material/styles";
import { Container, StatusBar } from "components";
import useDebounce from "components/useDebounce/useDebounce";
import storylets from "storylets";

const ACTION = {
  advance: "advance",
  temp: "temp",
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
    currentStorylet: storylets.initial,
    nextStorylet: null,
    lifePoints: 10,
    options: [],
    storylets: {},
  };
  const theme = useTheme();

  const [state, dispatch] = React.useReducer((previousState, action) => {
    switch (action.type) {
      case ACTION.advance:
        return {
          ...previousState,
          currentStorylet: null,
          nextStorylet: action.payload,
        };
      case ACTION.temp:
        return {
          ...previousState,
          currentStorylet: previousState.nextStorylet,
          nextStorylet: null,
        };
      default:
        return previousState;
    }
  }, initialState);

  const temp = useDebounce(
    state.nextStorylet,
    theme.transitions.duration.standard
  );

  const addOption = (option) => null;

  const advance = (storyletKey) =>
    dispatch({
      type: ACTION.advance,
      payload: storyletKey,
    });

  const initializeOptions = (options) => null;

  const selectedStorylet = storylets.values.find(
    (element) => element.key === state.currentStorylet
  );

  React.useEffect(() => {
    if (Boolean(temp)) {
      dispatch({ type: ACTION.temp });
    }
  }, [temp]);

  return (
    <StoryContext.Provider
      value={{
        ...state,
        addOption,
        advance,
        initializeOptions,
      }}>
      <Container maxWidth="sm">
        <StatusBar title={selectedStorylet?.title} />
        {storylets.values.map((element, index) => (
          <Slide
            direction="up"
            key={element.key}
            in={element.key === state.currentStorylet}
            mountOnEnter
            unmountOnExit>
            <Box sx={{ display: "flex", flexGrow: 1 }}>{element.storylet}</Box>
          </Slide>
        ))}
      </Container>
    </StoryContext.Provider>
  );
};
