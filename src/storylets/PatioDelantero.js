import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Recibidor from "./Recibidor";

// !!------------------------------------------------------------------------------
// Bosques: switch (n)
// 1:	! ##Examine
// print "Debido a la deforestación, los robledales y hayedos han quedado reducidos a sólo algunos parches de bosque suelto entre las grandes extensiones de [Prados](prado). Aparte de estas zonas de bosque, los pocos árboles lo suficientemente tozudos como para permanecer en pie se levantan sobretodo en las lindes entre parcelas o a lo largo de regatos y arroyos.";
// new_line;
// return true;

const PatioDelantero = () => {
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
      Prados: switch (n) 1: ! ##Examine print "El paisaje está dominado por una
      amplia extensión de pastos verdes para la ganadería. Explotados en forma
      de pequeños minifundios, unos muros bajos de piedra y vallas de pastor
      eléctrico delimitan cada parcela, creando una suerte de mapa político a
      escala local."; new_line; return true; 2: ! ##Examien print "---con sus
      guerras, conspiraciones y otras rencillas entre vecinos incluídas---";
      return true;
      !!------------------------------------------------------------------------------
      Patio: switch (n) 1: ! ##Examine (A - general) print "Un acceso de grava
      de unos diez metros de longitud comunica [la PuertaDelantera] con una
      carretera secundaria sin apenas tráfico."; return true; 2: ! ##Examine (B
      - fuera del coche) print " Desde esta parte, en la fachada sur, no se
      puede ver [el MarPatio] y el panorama en cambio es el de los
      [Prados](pastos) verdes salpicados de algunos [Bosques](árboles) y
      [Construcciones] solitarias y el de las imponentes [Montannas] que se
      elevan cerca."; new_line; return true; 3: ! ##Examine (C - dentro del
      coche) print "La temperatura fuera era agradable, con la brisa marina
      incluso se llegaba a sentir frío, pero en el interior del coche hace
      demasiado calor."; new_line; return true;
      !!------------------------------------------------------------------------------
      Montannas: switch (n) 1: ! ##Examine print "Apenas debe haber veinte o
      quizá treinta kilómetros entre la línea de costa y las primeras
      elevaciones montañosas. Como resultado el paisaje resulta precioso.";
      new_line; return true;
      !!------------------------------------------------------------------------------
      Casa: switch (n) 1: ! ##Examine print "Un volumen tosco de planta
      rectangular, con paredes revocadas en yeso. Allí donde el verdín y las
      enredaderas no han tomado la fachada se puede ver aún la última mano de
      pintura blanca."; new_line; return true;
    </Storylet>
  );
};

export default {
  key: "patio-delantero",
  storylet: <PatioDelantero />,
  title: "Patio delantero",
};
