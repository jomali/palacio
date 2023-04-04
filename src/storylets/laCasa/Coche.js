import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";

// !!------------------------------------------------------------------------------
// BotonArranque: switch (n)
// 1:	! ##Examine
// print "Tiene impresa la leyenda **@<<START -- STOP@>>** en letras blancas, algo desgastadas por el uso.";
// new_line;
// return true;
// 2:	! describe
// print "Aunque está lejos de ser nuevo, es de esos ya que se arrancan utilizando un [BotonArranque](botón).";
// new_line;
// return true;
// 3:	! ##Push (A - primera vez)
// print "Se gira en el asiento y contempla la casa un momento, sin llegar a arrancar. Se ha quedado vacía, en un sentido profundo e inexorable de la palabra. Si cuando murió su madre el hueco que dejó se sentía ya casi como algo físico, la aparición de un glaucoma crónico con el que se tuvieron que acostumbrar a convivir, ahora que no hay nadie para habitar este espacio el glaucoma se ha extendido. El vacío ha tomado un sentido más absoluto. Y quizá por vez primera se pregunta cómo debió sentirse su padre cuando ella se fue a estudiar a Madrid.";
// new_line;
// return true;
// 4:	! ##Push (B - duda)
// print "Vuelve a contemplar la casa por encima por encima del hombro, sin arrancar. ¿Está preparada para dejar aquel lugar?";
// new_line;
// return true;
// 5:	! ##Push (C)
// print "Silvia se inclina sobre el volante y nota el tacto del botón bajo los dedos. Se ha muerto. Ya no está. Presiona con suavidad, mirando a la casa una última vez a través del espejo retrovisor, al tiempo que el motor se pone en marcha. No nos llevábamos mal, piensa mientras nota cómo la vibración se transmite por todo el coche. No teníamos mucho trato pero no nos llevábamos mal. Es triste, claro. Estoy triste. Así funciona el luto.
// ^^
// Se ha muerto, como mamá. Ellos están muertos y yo soy una huérfana y estoy sola y estoy triste porque así funciona y no voy a tener hijos nunca... Si algo no se recuerda es como si no hubiese existido nunca, ¿no es así? Mi padre no existe y ahora todos su recuerdos de mi madre no existen tampoco ya y es como si mamá no hubieses existido nunca casi. Ahora tiene once años solamente. Ni eso, porque yo no existo casi tampoco, porque ¿quién me recuerda? Estoy en el coche pero esto no hay quién lo recuerde. Yo sólo. Nadie. ¿El coche no existe tampoco entonces? Quizá no y papá tenía razón y es un camión.
// ^^
// Mejor sin hijos. Son desagradecidos que te abandonan en el vacío y que no te van a ver nunca cuando mueres sólo y luego no te pueden recordar no lo suficiente porque no estuvieron aquí para vivir algo que recordar después y es como si no existieses y has muerto y ella sigue pensando más en ella misma y en los nombres de unos santos que no conoce que en tí que te has muerto. Tampoco te conoce pero contigo nunca se preguntó quién eras. Tal vez si hubieses estado pintado en un cristal *art-decó*... Pues para eso mejor sin hijos. Es triste. Triste de verdad. Claro, porque así funciona el luto.
// ^^
// El coche se aleja con un ronquido ahogado, dejando tras de sí un estela de humo demasiado negro.";
// new_line;
// return true;

// !!------------------------------------------------------------------------------
// Coche: switch (n) 1: ! ##Examine (A - uera del coche, primera vez) print
// "Lo mira con aprensión. Arrastraba alrededor de cien mil kilómetros ya
// cuando lo compró de segunda mano hace unos años y, aunque le ha funcionado
// muy bien hasta ahora, en el viaje desde Madrid ha empezado a hacer cosas
// extrañas: como si el motor se quedase sin potencia, incapaz de subir
// revoluciones aún con el acelerador pisado a fondo... Pasará por el taller
// esta semana sin falta, pero espera que antes sea capaz de llevarla de
// vuelta casa y no la deje tirada a mitad de camino."; new_line; return
// true; 2: ! ##Examine (B - fuera del coche, general) print "El granate
// descolorido de la carrocería arroja destellos brillantes bajo la luz del
// [Cielo](sol)."; new_line; return true; 3: ! describe print "Su [Coche]
// deslumbra bajo el sol de la tarde, aparcado frente a [la Casa] en mitad
// del camino."; new_line; return true; 4: ! ##Unlock (A - sin la llave,
// general) print "Tira de nuevo de la manilla pero es inútil, sigue cerrado
// con llave."; new_line; return true; 5: ! ##Unlock (B - sin la llave,
// primera vez) print "Tira de la manilla pero la puerta no se abre.";
// new_line; return true; 6: ! ##Unlock (C - sin la llave, primera vez, sin
// el bolso) print "Echa la mano a un lado buscando el bolso y sólo ahora se
// da cuenta de que no lo lleva encima. Ha debido dejárselo en alguna parte.
// Quizá en la cocina, cuando se ha preparado el triste sándwich que le ha
// servido de comida hoy."; new_line; return true; 7: ! ##Unlock (D - sin la
// llave, primera vez, con el bolso) print "Echa la mano [al Bolso] y rebusca
// en su interior pero no encuentra las llaves del coche. Se las ha debido
// que dejar en algún sitio."; new_line; return true; 8: ! ##Unlock (E - sin
// la llave, primera vez) print "Se palpa la ropa buscando las llaves del
// coche y sólo ahora se da cuenta de que no las lleva encima. Se las ha
// debido dejar en algún sitio."; new_line; return true; 9: ! ##Lock (after)
// print "Vuelve a escuchar el cierre centralizado, esta vez bloqueando las
// puertas."; new_line; return true; 10: ! ##Unlock (after) print "Aprieta el
// botón del mando a distancia y le responde el sonido del cierre
// centralizado abriéndose."; new_line; return true; 11: ! ##Enter (after)
// print "Entra en [el Coche]."; new_line; return true; 12: ! ##Exit print
// "Vuelve a salir [del Coche]."; new_line; return true;

const Coche = () => {
  const options = (story) => [
    <Option buttonVariant={"contained"} onClick={() => story.restart(true)}>
      Finalizar
    </Option>,
  ];

  return (
    <Storylet options={options}>
      Se sube en el coche y contempla la casa un momento a través del espejo
      retrovisor.
      <NewLine />
      Se ha quedado vacía, en un sentido profundo e inexorable de la palabra. Si
      cuando murió su madre el hueco que dejó se sentía ya casi como algo
      físico, la aparición de un glaucoma crónico con el que se tuvieron que
      acostumbrar a convivir, ahora que no hay nadie para habitar ese espacio el
      glaucoma se ha extendido. El vacío ha tomado un sentido más absoluto. Y
      por primera vez se pregunta cómo debió sentirse su padre cuando ella se
      fue a estudiar a Madrid.
      <NewLine />
      Ya no está, piensa mientras gira la llave en el contacto. Se ha tomado la
      venganza y ahora es él quien me abandona a mi.
      <NewLine />
      El coche se aleja con un ronquido, dejando tras de sí una estela de humo
      negro.
    </Storylet>
  );
};

export default {
  key: "coche",
  storylet: <Coche />,
  title: "A través del retrovisor",
};
