import React from "react";
import { NewLine, Strong } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Citas from "./Citas";

const LaCasa = () => {
  return (
    <Storylet
      options={(story) => [
        <Option onClick={() => story.go(Citas.key)}>Continuar</Option>,
      ]}
    >
      <Strong>La casa</Strong> se levanta sobre un pequeño promontorio, a apenas
      una treintena de pasos de las frías aguas del Cantábrico.
      <NewLine />
      Durante años Silvia vivió en esta casa. Recuerda cuando era niña y, desde
      la terraza en la parte de atrás, descendía cuidadosamente por entre las
      rocas con la ayuda de sus padres hasta la cala al pie del promontorio. Los
      cangrejos se apresuraban a escabullirse bajo la arena al verlos llegar. Su
      madre le explicó una vez que lo hacían porque eran unos vergonzosos.
      <NewLine />
      Recuerda a su padre y a sus tíos insistiendo en que no debía tener miedo a
      la enfermedad, que todo saldría bien. El ligero temblor en la voz al
      decirle aquello, las miradas perdidas. Recuerda cuando tenía once años y
      nada salió bien. Durante mucho tiempo siguió bajando a menudo hasta la
      cala ella sola, después de la muerte de su madre, intentando escabullirse
      allí del mundo.
      <NewLine />
      Al terminar el bachillerato entró en una universidad de otra provincia y
      más tarde, tras los estudios, consiguió trabajo y construyó su vida en la
      ciudad, lejos de aquel lugar. Ahora su padre ha muerto también y la casa
      se ha quedado vacía. Ya nadie visita la pequeña cala…
      <NewLine />
      Sólo los cangrejos.
    </Storylet>
  );
};

export default {
  key: "la-casa",
  storylet: <LaCasa />,
  title: "La casa",
};
