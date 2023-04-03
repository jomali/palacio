import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import { useStory } from "components/StoryProvider";
import Terraza from "./Terraza";

const Cala = () => {
  const story = useStory();

  const options = () => [
    <Option storylet={Terraza.key}>Subir a la terraza</Option>,
  ];

  const rnd = Math.floor(Math.random() * 5);

  return (
    <Storylet options={options}>
      Los cangrejos se han escondido. Está sola, frente al mar.
      {story.hasVisited("cala") && rnd <= 1 && (
        <>
          <NewLine />
          Una ola se estrella en las rocas.
        </>
      )}
      {story.hasVisited("cala") && rnd === 2 && (
        <>
          <NewLine />
          Otra ola rompe contra las rocas, lanzando al aire una nube de agua.
        </>
      )}
    </Storylet>
  );
};

export default {
  key: "cala",
  storylet: <Cala />,
  title: "Cala de los cangrejos",
};
