import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import { useStory } from "components/StoryProvider";
import Pasillo from "./Pasillo";

// !!------------------------------------------------------------------------------
// BicicletaEstatica: switch (n)
// 1:	! ##Examine
// print "Está justo frente a [la VentanaGimnasio], de manera que puedas ver el [VentanaGimnasio](mar) mientras pedaleas. Sigue prefiriendo una con ruedas, en cualquier caso. Y más aquí que puedes disfrutar tranquilamente del paisaje marítimo por carreteras sin apenas tráfico.";
// new_line;
// return true;
// 2:	! ##Enter
// print "No tiene gana alguna de ponerse a hacer ejercicio ahora.";
// new_line;
// return true;

// !!------------------------------------------------------------------------------
// BancoAbdominales: switch (n)
// 1:	! ##Examine
// print "Un extremo está elevado sobre el suelo mientras que el otro lo toca, de manera que la superficie queda inclinada. El aspecto es el de un triángulo rectángulo escaleno, como un gran cartabón de dibujo técnico apoyado sobre su hipotenusa. En la parte elevada hay varios cilindros forrados de gomaespuma a los que uno puede sujetarse para hacer ejercicios.";
// new_line;
// return true;
// 2:	! ##Enter
// print "No tiene gana alguna de ponerse a hacer ejercicio ahora.";
// new_line;
// return true;

// !!------------------------------------------------------------------------------
// BancoAbdominalesCilindros: switch (n)
// 1:	! ##Examine
// print "Apoyos forrados de gomaespuma blanda. Para facilitar los ejercicios sobre el aparato.";
// new_line;
// return true;

const DormitorioSilvia = () => {
  const story = useStory();

  const options = () => [<Option storylet={Pasillo}>Ir al pasillo</Option>];

  return (
    <Storylet options={options}>
      Su antiguo dormitorio se ha convertido en un pequeño gimnasio. El lugar en
      el que estaban su cama y su escritorio lo ocupan ahora un banco de
      abdominales y una bicicleta elástica. Hay varias esterillas enrolladas en
      el suelo, unas mancuernas e incluso una pelota de yoga.
      {!story.hasVisited("dormitorio-silvia") && (
        <>
          <NewLine />
          Se pregunta dónde habrán acabado todas sus cosas. ¿Se desharía su
          padre de ellas?
        </>
      )}
      <NewLine />
    </Storylet>
  );
};

export default {
  key: "dormitorio-silvia",
  storylet: <DormitorioSilvia />,
  title: "Habitación de Silvia",
};
