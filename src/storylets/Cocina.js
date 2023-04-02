import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Recibidor from "./Recibidor";

// !! print "De diseño futurista hasta un punto casi ridículo para una cafetera. Parece sacada del plató de rodaje de *Minority Report* o de un laboratorio de prototipos de *Apple*. Tiene una ranura para meter las cápsulas de café y un botón de encendido iluminado por un led blanco.";

const Cocina = () => {
  return (
    <Storylet
      options={(story) => [
        <Option onClick={() => story.go(Recibidor.key)}>
          Regresar al recibidor
        </Option>,
      ]}>
      print "De madera, con unas tallas de motivos florales horteras.";
      !!------------------------------------------------------------------------------
      Cocina: switch (n) 1: ! ##Examine print "Espaciosa y bien iluminada. Su
      padre ha debido ir añadiendo muebles y electrodomésticos conforme los iba
      necesitando, atendiendo posiblemente antes a la funcionalidad que al
      aspecto del conjunto. El resultado es un *collage*; aparatos de aspecto
      moderno y minimalista como [un Frigorifico] con acabado en acero brillante
      se combinan con una antigua [HornoLena](cocina de leña) o [un
      ArmarioCocina] con feos motivos florales. Está comunicada con el salón y
      la terraza trasera, a [e_obj] y [n_obj] respectivamente."; new_line;
      return true; 2: ! ##Examine print "Sobre [el x1] puede ver [lista de
      objetos sobre x1]"; return true; 3: ! ##Examine print ", y puede ver
      también [lista de objetos sobre x1] en [el x1]"; return true; 4: !
      ##Examine print "."; new_line; return true;
    </Storylet>
  );
};

export default {
  key: "cocina",
  storylet: <Cocina />,
  title: "Cocina",
};
