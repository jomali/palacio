import React from "react";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { Container, StatusBar } from "components";
import storylets from "storylets";

export const StoryContext = React.createContext();

export const StoryProvider = (props) => {
  const initialState = {
    attributes: {
      intelligence: 5,
      interpersonal: 5,
      locomotion: 5,
      physique: 5,
    },
    currentStorylet: storylets[0].key,
    lifePoints: 10,
    options: [],
    storylets: {},
  };

  const [state, dispatch] = React.useReducer((previousState, action) => {
    switch (action.type) {
      default:
        return previousState;
    }
  }, initialState);

  const addOption = (option) => null;

  const advance = (storylet) => null;

  const initializeOptions = (options) => null;

  const selectedStorylet = storylets.find(
    (element) => element.key === state.currentStorylet
  );

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
        {storylets.map((element, index) => (
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
