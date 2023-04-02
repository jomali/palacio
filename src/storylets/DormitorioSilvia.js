import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Recibidor from "./Recibidor";

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
  return (
    <Storylet
      options={(story) => [
        <Option onClick={() => story.go(Recibidor.key)}>
          Entrar en la casa
        </Option>,
      ]}>
      Los rayos de sol del exterior se cuelan por una cristalera que hay junto a
      la puerta principal, bañando el pequeño recibidor en una mezcla de azules,
      verdes, naranjas y rojos.
      <NewLine />
      Por un momento permanece en pie en silencio, abstraída de nuevo en las
      refracciones de la luz. Todo ha terminado. Ahora que ya no tiene nada más
      que hacer aquí puede regresar a su propia casa y continuar con su vida
      normal.
      <NewLine />
      Han sido vidrieras más que suficientes por un día.
      !!------------------------------------------------------------------------------
      Gimnasio: switch (n) 1: ! ##Examine print "Su antiguo dormitorio. No tiene
      exactamente el mismo aspecto que recuerda de cuando todavía vivía aquí,
      pero aún hay ciertos detalles reconocibles; como [el BancoAbdominales], a
      un lado, y [la BicicletaEstatica] enfrente, justo debajo de [la
      VentanaGimnasio]. Incluso pueden distinguirse también las viejas
      [Esterillas] amontonadas en una esquina y [la PelotaYoga], en los que
      guardaba los juguetes, al lado de la [PuertaGimnasio](puerta)."; new_line;
      return true; 2: ! ##Examine print "Su padre ha convertido su antiguo
      dormitorio en un pequeño gimnasio. En el lugar de su cama ahora hay [un
      BancoAbdominales], y [una BicicletaEstatica] donde primero estaba el
      escritorio. Hay además un par de [Esterillas] enrrolladas junto a [la
      PuertaGimnasio], [Mancuernas], e incluso una gran [PelotaYoga].";
      new_line; return true; 3: ! cant_go print "No puede ir por ahí. La
      habitación comunica únicamente al [s_obj], con [el PasilloAdj].";
      new_line; return true;
      !!------------------------------------------------------------------------------
      PelotaYoga: switch (n) 1: ! ##Examine print "Nunca ha sabido muy bien para
      qué sirven. Hace años, durante un viaje con amigos de la facultad, se
      alojaron en un albergue en el que había varias pelotas de estas. A alguien
      se le ocurrió que podían colocarse por parejas, frente a frente,
      sosteniendo una cada uno a modo de airbag, y echar a correr hasta hacerlas
      chocar ---y todos pensaron que era una idea fantástica, por supuesto---.
      Silvia acabó volando de forma bastante literal y con un ojo morado.";
      new_line; return true; 2: ! ##Examine print "Nunca ha sabido muy bien para
      qué sirven aquellas pelotas enormes."; new_line; return true;
    </Storylet>
  );
};

export default {
  key: "dormitorio-silvia",
  storylet: <DormitorioSilvia />,
  title: "Habitación de Silvia",
};
