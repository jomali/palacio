import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Recibidor from "./Recibidor";

const Salon = () => {
  return (
    <Storylet
      options={(story) => [
        <Option onClick={() => story.advance(Recibidor.key)}>
          Regresar al recibidor
        </Option>,
      ]}>
      Los rayos de sol del exterior se cuelan por una cristalera que hay junto a
      la puerta principal, bañando el pequeño recibidor en una mezcla de azules,
      verdes, naranjas y rojos.
      <NewLine />
      Por un momento permanece en pie en silencio, abstraída de nuevo en las
      refracciones de la luz. Todo ha terminado. Ahora que ya no tiene nada más
      que hacer aquí puede regresar a su propia casa y continuar con su vida
      normal.
      <NewLine />
      Han sido vidrieras más que suficientes por un día.
    </Storylet>
  );
};

export default {
  key: "salon",
  storylet: <Salon />,
  title: "Salón",
};
