import laCasaStorylets from "./laCasa";
import LaCasa from "./laCasa/LaCasa";

export default {
  initial: LaCasa.key,
  values: [...laCasaStorylets],
};
