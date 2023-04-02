import Citas from "./Citas";
import Cristalera from "./Cristalera";
import LaCasa from "./LaCasa";
import LaCeremonia from "./LaCeremonia";
import Pasillo from "./Pasillo";
import PatioDelantero from "./PatioDelantero";
import Recibidor from "./Recibidor";
import Salon from "./Salon";

export default {
  initial: Recibidor.key,
  values: [
    Citas,
    Cristalera,
    LaCasa,
    LaCeremonia,
    Pasillo,
    PatioDelantero,
    Recibidor,
    Salon,
  ],
};
