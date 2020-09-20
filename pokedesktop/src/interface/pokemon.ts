import Base from "./base";

export interface PokemonDetail {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: [
    {
      slot: number;
      type: Base;
    },
  ];
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: Base;
    },
  ];
  moves: [
    {
      move: Base;
    },
  ];
}

export interface PokemonSpecial {
  base_happiness: string;
  capture_rate: string;
  flavor_text_entries: [
    {
      flavor_text: string;
      language: Base;
      version: Base;
    },
  ];
  is_legendary: boolean;
  is_mythical: boolean;
}
