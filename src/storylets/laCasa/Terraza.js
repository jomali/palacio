import React from "react";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Cala from "./Cala";
import Cocina from "./Cocina";

const Terraza = () => {
  const options = () => [
    <Option storylet={Cocina.key}>Entrar a la cocina</Option>,
    <Option storylet={Cala.key}>Bajar a la cala</Option>,
  ];

  return (
    <Storylet options={options}>
      Un trozo de suelo hormigonado y jardín abierto al espectáculo del mar
      Cantábrico. Apenas quince metros de pendiente rocosa son todo cuanto
      separa la terraza de la pequeña cala en la que rompen las olas, más abajo.
    </Storylet>
  );
};

export default {
  key: "terraza",
  storylet: <Terraza />,
  title: "Terraza",
};
