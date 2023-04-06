import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import memory from "sections/memories/memory";
import useMemories from "sections/memories/useMemories";
import Recibidor from "./Recibidor";

const Cristalera = () => {
  const memories = useMemories();

  React.useEffect(
    () => memories.unlock(memory.vidrieras),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const options = () => [<Option storylet={Recibidor}>Continuar</Option>];

  return (
    <Storylet options={options}>
      Por un momento permanece en pie en silencio, abstraída por segunda vez hoy
      en la refracción de la luz y las motas de polvo en suspensión. Todo ha
      terminado. Ahora que ya no tiene nada más que hacer aquí puede regresar a
      su propia casa y continuar con su vida normal.
      <NewLine />
      Han sido vidrieras más que suficientes por un día.
    </Storylet>
  );
};

export default {
  key: "cristalera",
  storylet: <Cristalera />,
  title: "Cristalera de colores",
};
