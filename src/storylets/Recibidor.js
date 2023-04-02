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

  const getOptions = (story) => {
    const result = [];

    // Cristalera
    if (!story.hasVisited(Cristalera.key)) {
      result.push(
        <Option onClick={() => story.go(Cristalera.key)}>
          Mirar cristalera
        </Option>
      );
    }

    // Salón
    result.push(
      <Option onClick={() => story.go(Salon.key)}>Entrar al salón</Option>
    );

    // Pasillo
    result.push(
      <Option onClick={() => story.go(Pasillo.key)}>
        Subir al piso de arriba
      </Option>
    );

    // Patio delantero
    if (story.hasVisited(Cristalera.key)) {
      result.push(
        <Option onClick={() => story.go(PatioDelantero.key)}>
          Salir de allí
        </Option>
      );
    }

    return result;
  };

  const color1 = story.state["recibidor.color1"] || colors[0];
  const color2 = story.state["recibidor.color2"] || colors[3];

  return (
    <Storylet options={getOptions}>
      Los rayos de sol del exterior se cuelan por una cristalera que hay junto a
      la puerta principal, bañando el pequeño recibidor en una mezcla de{" "}
      {story.hasVisited("recibidor") ? (
        color1
      ) : (
        <LoopLink
          onClick={(newValue) =>
            story.update({ id: "recibidor.color1", value: newValue })
          }
          options={colors.filter((element) => element !== color2)}
          value={color1}
        />
      )}{" "}
      y{" "}
      {story.hasVisited("recibidor") ? (
        color2
      ) : (
        <LoopLink
          onClick={(newValue) =>
            story.update({ id: "recibidor.color2", value: newValue })
          }
          options={colors.filter((element) => element !== color1)}
          value={color2}
        />
      )}
      .
    </Storylet>
  );
};

export default {
  key: "recibidor",
  storylet: <Recibidor />,
  title: "Recibidor",
};
