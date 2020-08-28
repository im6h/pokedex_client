import Base from "./base";

export default interface AbilityDetail {
  id: number;
  name: string;
  pokemons:[
    {
      is_hidden: boolean,
      pokemon: Base,
      slot: number
    }
  ]
}