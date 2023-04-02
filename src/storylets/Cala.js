import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Recibidor from "./Recibidor";

// !!------------------------------------------------------------------------------
// Cala: switch (n)
// 1:	! ##Examine
// print "Los cangrejos se han escondido. Está sola, frente [al Mar]. A su espalda, [el Sendero] asciende de vuelta hasta la casa.";
// new_line;
// return true;
// 2:	! ##Go (n)
// print "En esa dirección sólo está [el Mar].";
// new_line;
// return true;
// !! Another wave crashes against the rocks, sending a cloud of spray into the air.

const Cala = () => {
  return (
    <Storylet
      options={(story) => [
        <Option onClick={() => story.go(Recibidor.key)}>
          Regresar al recibidor
        </Option>,
      ]}>
      Los cangrejos se han escondido. Está sola, frente [al Mar]. A su espalda,
      [el Sendero] asciende de vuelta hasta la casa.
    </Storylet>
  );
};

export default {
  key: "cala",
  storylet: <Cala />,
  title: "Cala de los cangrejos",
};
