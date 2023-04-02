import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Recibidor from "./Recibidor";

// print "Diazepam. Sedantes. No tenía ni idea de que su padre estuviese tomando ninguna medicación.";

// print "Tinte para hombre en forma de gel. Están medio vacíos.";

const Banno = () => {
  return (
    <Storylet
      options={(story) => [
        <Option onClick={() => story.go(Recibidor.key)}>
          Entrar en la casa
        </Option>,
      ]}>
      Pequeño pero luminoso, está revestido de azulejo blanco desde el suelo
      hasta media pared, con la otra mitad pintada en un suave color arena. Todo
      su mobiliario se reduce a un armario auxiliar bajo la pila del lavabo, el
      váter y la bañera al fondo. Conecta al sur con el domitorio.
      !!------------------------------------------------------------------------------
      Espejo: switch (n) 1: ! ##Examine print "Se detiene frente [al Espejo].
      Busca"; return true; 2: ! ##Examine print "Mira de nuevo [al Espejo],
      buscando"; return true; 3: ! ##Examine print " pistas de él en el rostro
      del otro lado. Tal vez la nariz chata. Ese pelo oscuro y abundante. Los
      ojos marrones. La mirada perdida en otro sitio."; new_line; return true;
      4: ! ##Kiss print "Nunca le ha gustado la persona que había al otro lado
      lo suficiente."; new_line; return true;
    </Storylet>
  );
};

export default {
  key: "banno",
  storylet: <Banno />,
  title: "Baño",
};
