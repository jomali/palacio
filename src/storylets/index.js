import laCasaStorylets from "./laCasa";
import LaCasa from "./laCasa/LaCasa";
import laCeremoniaStorylets from "./laCeremonia";

export default {
  initial: LaCasa,
  values: [...laCasaStorylets, ...laCeremoniaStorylets],
};
