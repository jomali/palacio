import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Recibidor from "./Recibidor";

const Pasillo = () => {
  return (
    <Storylet
      options={(story) => [
        <Option onClick={() => story.go(Recibidor.key)}>
          Bajar al recibidor
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
      Pasillo: switch (n) 1: ! ##Examine print "El corto corredor se encarga de
      comunicar su [AntiguoDormitorioAdj] y [el DormitorioPrincipalAdj] con las
      [Escalera](escaleras) de madera por las que se puede descender hasta [la
      PlantaBajaAdj]."; !! TODO !! "Adornado con algunas viejas fotografías en
      las paredes, el pasillo comunica su antiguo dormitorio [al n_obj], el
      dormitorio principal [al e_obj], y las escaleras de madera que descienden
      en curva hasta la planta baja, [al s_obj]."; new_line; return true;
    </Storylet>
  );
};

export default {
  key: "pasillo",
  storylet: <Pasillo />,
  title: "Pasillo del piso de arriba",
};
