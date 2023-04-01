import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Pasillo from "./Pasillo";
import PatioDelantero from "./PatioDelantero";
import Salon from "./Salon";

const Recibidor = () => {
  return (
    <Storylet
      options={(story) => [
        <Option onClick={() => story.advance(Salon.key)}>
          Entrar al salón
        </Option>,
        <Option onClick={() => story.advance(Pasillo.key)}>
          Subir al piso de arriba
        </Option>,
        <Option onClick={() => story.advance(PatioDelantero.key)}>
          Salir de allí
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
  key: "recibidor",
  storylet: <Recibidor />,
  title: "Recibidor",
};
