import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Recibidor from "./Recibidor";

const LaCeremonia = () => {
  return (
    <Storylet
      options={(story) => [
        <Option onClick={() => story.advance(Recibidor.key)}>Continuar</Option>,
      ]}>
      Ha cumplido con sus obligaciones por la mañana. Se ha encontrado con gente
      a la que no veía desde hacía años y a la que recordaba solo a medias, y
      con muchos otros a los que directamente o bien no conocía o no recordaba
      en absoluto. Todos la han saludado afectuosamente.
      <NewLine />
      Durante la ceremonia, incapaz de prestar atención al sermón, se ha
      concentrado en los policromados de las vidrieras y ha permanecido
      ensimismada en los juegos caprichosos de la luz.
      <NewLine />
      Al acabar ha tenido que repetir un nuevo trámite de abrazos y besos en las
      mejillas, de apretones de mano y palabras amables. Ella ha agradecido los
      gestos con sinceridad, se ha desecho educadamente de aquellos que
      insistían en acompañarla, y ha recorrido a solas las viejas carreteras
      sacudidas por aquel viento cargado de olores viejos.
      <NewLine />
      Hasta llegar a la vieja casa de sus padres
    </Storylet>
  );
};

export default {
  key: "la-ceremonia",
  storylet: <LaCeremonia />,
  title: "Vidrieras",
};
