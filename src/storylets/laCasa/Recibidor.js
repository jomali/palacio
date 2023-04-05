import React from "react";
import LoopLink from "components/LoopLink";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import { useStory } from "components/StoryProvider";
import Cristalera from "./Cristalera";
import Pasillo from "./Pasillo";
import PatioDelantero from "./PatioDelantero";
import Salon from "./Salon";

const Recibidor = () => {
  const colors = [
    "azules",
    "añiles",
    "violetas",
    "rojos",
    "naranjas",
    "amarillos",
    "verdes",
  ];

  const story = useStory();

  const color1 = story.state["recibidor.color1"] || colors[0];
  const color2 = story.state["recibidor.color2"] || colors[3];

  const options = () => [
    <Option inactive={story.hasVisited(Cristalera)} storylet={Cristalera}>
      Mirar cristalera
    </Option>,
    <Option storylet={Salon}>Ir al salón</Option>,
    <Option storylet={Pasillo}>Subir al piso de arriba</Option>,
    <Option inactive={!story.hasVisited(Cristalera)} storylet={PatioDelantero}>
      Salir de allí
    </Option>,
  ];

  return (
    <Storylet options={options}>
      Los rayos de sol del exterior se cuelan por una cristalera que hay junto a
      la puerta principal, bañando el pequeño recibidor en una mezcla de{" "}
      <LoopLink
        onClick={(newValue) =>
          story.update({ id: "recibidor.color1", value: newValue })
        }
        options={colors.filter((element) => element !== color2)}
        readOnly={story.hasVisited("recibidor")}
        value={color1}
      />{" "}
      y{" "}
      <LoopLink
        onClick={(newValue) =>
          story.update({ id: "recibidor.color2", value: newValue })
        }
        options={colors.filter((element) => element !== color1)}
        readOnly={story.hasVisited("recibidor")}
        value={color2}
      />
      .
    </Storylet>
  );
};

export default {
  key: "recibidor",
  storylet: <Recibidor />,
  title: "Recibidor",
};
