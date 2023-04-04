import React from "react";
import { useTheme } from "@mui/material/styles";
import useDebounce from "components/useDebounce/useDebounce";

const ACTION = {
  restartCompleted: "restartCompleted",
  restartTriggered: "restartTriggered",
  transitionCompleted: "transitionCompleted",
  transitionTriggered: "transitionTriggered",
  update: "update",
};

export default (initialStorylet, initialState = {}) => {
  const theme = useTheme();

  const initialStoryState = {
    other: {
      ...initialState,
    },
    restart: false,
    storylets: {
      current: initialStorylet,
      next: null,
      visited: new Set(),
    },
  };

  const [storyState, dispatch] = React.useReducer((previousState, action) => {
    switch (action.type) {
      case ACTION.restartCompleted:
        return initialStoryState;
      case ACTION.restartTriggered:
        return {
          ...previousState,
          restart: true,
          storylets: {
            ...previousState.storylets,
            current: null,
          },
        };
      case ACTION.transitionCompleted:
        return {
          ...previousState,
          storylets: {
            ...previousState.storylets,
            current: previousState.storylets.next,
            next: null,
          },
        };
      case ACTION.transitionTriggered:
        const visitedStorylets = previousState.storylets.visited;
        visitedStorylets.add(previousState.storylets.current);
        return {
          ...previousState,
          storylets: {
            ...previousState.storylets,
            current: null,
            next: action.payload || previousState.storylets.current,
            visited: visitedStorylets,
          },
        };
      case ACTION.update:
        return {
          ...previousState,
          other: {
            ...previousState.other,
            [action.payload?.id]: action.payload?.value,
          },
        };
      default:
        return previousState;
    }
  }, initialStoryState);

  const nextStorylet = useDebounce(
    storyState.storylets.next,
    theme.transitions.duration.standard
  );

  React.useEffect(() => {
    if (Boolean(nextStorylet)) {
      dispatch({ type: ACTION.transitionCompleted });
    }
  }, [nextStorylet]);

  const restart = useDebounce(
    storyState.restart,
    theme.transitions.duration.standard
  );

  React.useEffect(() => {
    if (restart) {
      dispatch({ type: ACTION.restartCompleted });
    }
  }, [restart]);

  return {
    currentStorylet: storyState.storylets.current,
    data: storyState.other,
    hasVisited: (storyletKey) => storyState.storylets.visited.has(storyletKey),
    onMove: (storyletKey) =>
      dispatch({
        type: ACTION.transitionTriggered,
        payload: storyletKey,
      }),
    onRestart: () => dispatch({ type: ACTION.restartTriggered }),
    onUpdate: (newValue = {}) =>
      dispatch({ type: ACTION.update, payload: newValue }),
  };
};
