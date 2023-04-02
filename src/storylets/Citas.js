import React from "react";
import { Emphasis, NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Recibidor from "./Recibidor";

const Citas = () => {
  return (
    <Storylet
      options={(story) => [
        <Option onClick={() => story.go(Recibidor.key)}>Continuar</Option>,
      ]}>
      <Emphasis>
        «Y entro en los campos y anchos palacios de la memoria, donde están los
        tesoros de innumerables imágenes de toda clase de cosas acarreadas por
        los sentidos».
      </Emphasis>
      <NewLine />
      San Agustín. Confesiones, libro décimo, capítulo VIII.
      <NewLine />
      <NewLine />
      <Emphasis>
        «La memoria como un lugar, como un edificio, como una serie de columnas,
        cornisas, pórticos. El cuerpo dentro de la mente, como si nos moviéramos
        allí dentro, caminando de un sitio a otro, y el sonido de nuestras
        pisadas mientras caminamos de un sitio a otro».
      </Emphasis>
      <NewLine />
      Paul Auster. La invención de la soledad
    </Storylet>
  );
};

export default {
  key: "citas",
  storylet: <Citas />,
  title: "",
};
