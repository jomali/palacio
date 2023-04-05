import React from "react";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import ElEspejo from "./Espejo";
import Pasillo from "./Pasillo";

// print "Diazepam. Sedantes. No tenía ni idea de que su padre estuviese tomando ninguna medicación.";

// print "Tinte para hombre en forma de gel. Están medio vacíos.";

const Banno = () => {
  const options = (story) => [
    <Option inactive={story.hasVisited(ElEspejo)} storylet={ElEspejo}>
      Mirar espejo
    </Option>,
    <Option storylet={Pasillo}>Ir al pasillo</Option>,
  ];

  return (
    <Storylet options={options}>
      Pequeño pero luminoso, está revestido de azulejo blanco desde el suelo
      hasta media pared, con la otra mitad pintada en un suave color arena. Todo
      su mobiliario se reduce a un armario auxiliar bajo la pila del lavabo, el
      váter y la bañera al fondo.
    </Storylet>
  );
};

export default {
  key: "banno",
  storylet: <Banno />,
  title: "Baño",
};
