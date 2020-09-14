import Base from "./base";

interface EvolutionTo {
  is_baby: boolean;
  species: Base;
  evolves_to: EvolutionTo[];
}

export default interface EvolutionDetail {
  id: number;
  chain: EvolutionTo;
}
