import React from "react";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
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

  const [color1, setColor1] = React.useState(colors[0]);
  const [color2, setColor2] = React.useState(colors[3]);

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

  return (
    <Storylet options={(story) => getOptions(story)}>
      Los rayos de sol del exterior se cuelan por una cristalera que hay junto a
      la puerta principal, bañando el pequeño recibidor de la casa de sus padres
      en una mezcla de {color1} y {color2}.
    </Storylet>
  );
};

export default {
  key: "recibidor",
  storylet: <Recibidor />,
  title: "Recibidor",
};
