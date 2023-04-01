import Citas from "./Citas";
import LaCasa from "./LaCasa";
import LaCeremonia from "./LaCeremonia";
import Pasillo from "./Pasillo";
import PatioDelantero from "./PatioDelantero";
import Recibidor from "./Recibidor";
import Salon from "./Salon";

export default {
  initial: LaCasa.key,
  values: [
    Citas,
    LaCasa,
    LaCeremonia,
    Pasillo,
    PatioDelantero,
    Recibidor,
    Salon,
  ],
};
