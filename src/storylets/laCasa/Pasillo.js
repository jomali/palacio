import React from "react";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Banno from "./Banno";
import DormitorioPrincipal from "./DormitorioPrincipal";
import DormitorioSilvia from "./DormitorioSilvia";
import Recibidor from "./Recibidor";

const Pasillo = () => {
  const options = () => [
    <Option storylet={Recibidor.key}>Bajar al recibidor</Option>,
    <Option storylet={Banno.key}>Entrar al baño</Option>,
    <Option storylet={DormitorioSilvia.key}>
      Entrar al dormitorio de Silvia
    </Option>,
    <Option storylet={DormitorioPrincipal.key}>
      Entrar al dormitorio de su padre
    </Option>,
  ];

  return (
    <Storylet options={options}>
      El corto corredor se encarga de comunicar las habitaciones y el baño del
      segundo piso. Algunas viejas fotografías adornan las paredes.
    </Storylet>
  );
};

export default {
  key: "pasillo",
  storylet: <Pasillo />,
  title: "Pasillo de la primera planta",
};
