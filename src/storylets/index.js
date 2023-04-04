import Inventario from "./Inventario";
import laCasaStorylets from "./laCasa";
import Recibidor from "./laCasa/Recibidor";
import Recuerdos from "./Recuerdos";

export default {
  initial: Recibidor.key,
  values: [...laCasaStorylets, Inventario, Recuerdos],
};
