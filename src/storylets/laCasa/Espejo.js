import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Banno from "./Banno";

const Espejo = () => {
  const options = () => [
    <Option storylet={Banno.key}>Apartar la mirada</Option>,
  ];

  return (
    <Storylet options={options}>
      Se detiene frente al espejo, buscando pistas de él en el rostro del otro
      lado.
      <NewLine />
      Tal vez la nariz chata. Ese pelo oscuro y abundante. Los ojos marrones.
      <NewLine />
      La mirada perdida en otro sitio.
    </Storylet>
  );
};

export default {
  key: "banno.espejo",
  storylet: <Espejo />,
  title: "La persona del otro lado",
};
