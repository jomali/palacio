import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Recibidor from "./Recibidor";

const PatioTrasero = () => {
  return (
    <Storylet
      options={(story) => [
        <Option onClick={() => story.go(Recibidor.key)}>
          Entrar en la casa
        </Option>,
      ]}>
      Un palco privado al espectáculo impresionante que ofrece el mar. Apenas
      quince metros de pendiente rocosa son todo cuanto separa la cumbre del
      promontorio sobre el que se erige la casa y la pequeña cala en la que
      rompen las olas, más [d_obj]. Aparte de la propia ladera por la que se
      puede descender sin mucha dificultad, el único acceso a la terraza es la
      puerta de la cocina, al [s_obj].";
    </Storylet>
  );
};

export default {
  key: "patio-trasero",
  storylet: <PatioTrasero />,
  title: "Patio trasero",
};
