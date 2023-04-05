import React from "react";
import { Emphasis, NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Salon from "./Salon";
import Terraza from "./Terraza";

// !! print "De diseño futurista hasta un punto casi ridículo para una cafetera. Parece sacada del plató de rodaje de *Minority Report* o de un laboratorio de prototipos de *Apple*. Tiene una ranura para meter las cápsulas de café y un botón de encendido iluminado por un led blanco.";

// print "De madera, con unas tallas de motivos florales horteras.";
// !!------------------------------------------------------------------------------
// Cocina: switch (n) 1: ! ##Examine print "Espaciosa y bien iluminada. Su
// padre ha debido ir añadiendo muebles y electrodomésticos conforme los iba
// necesitando, atendiendo posiblemente antes a la funcionalidad que al
// aspecto del conjunto. El resultado es un *collage*; aparatos de aspecto
// moderno y minimalista como [un Frigorifico] con acabado en acero brillante
// se combinan con una antigua [HornoLena](cocina de leña) o [un
// ArmarioCocina] con feos motivos florales. Está comunicada con el salón y
// la terraza trasera, a [e_obj] y [n_obj] respectivamente."; new_line;
// return true; 2: ! ##Examine print "Sobre [el x1] puede ver [lista de
// objetos sobre x1]"; return true; 3: ! ##Examine print ", y puede ver
// también [lista de objetos sobre x1] en [el x1]"; return true; 4: !
// ##Examine print "."; new_line; return true;

const Cocina = () => {
  const options = () => [
    <Option storylet={Terraza}>Salir a la terraza</Option>,
    <Option storylet={Salon}>Ir al salón</Option>,
  ];

  return (
    <Storylet options={options}>
      Espaciosa y bien iluminada. Está claro que se han ido añadiendo muebles y
      electrodomésticos conforme se iban necesitando sin preocuparse del aspecto
      del conjunto. El resultado es un <Emphasis>collage</Emphasis>. Hay un
      frigorífico de aspecto moderno y minimalista junto a una lavadora de al
      menos veinte años con marcas de óxido. Una cafetera de diseño en un
      armario de motivos florales horteras. Una cocina de leña antigua.
      <NewLine />
      Ninguna de las sillas alrededor de la mesa de comedor es igual a otra.
    </Storylet>
  );
};

export default {
  key: "cocina",
  storylet: <Cocina />,
  title: "Cocina",
};
