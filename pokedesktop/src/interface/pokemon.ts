import Base from "./base";

export interface PokemonDetail {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: [
    {
      slot: number;
      type: Base
    }
  ]
  stats: [
    {
      base_stat: number,
      effort: number,
      stat: Base,
    }
  ]

}

