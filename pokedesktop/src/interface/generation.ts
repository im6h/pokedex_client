import Base from "./base";

export default interface Generation {
  id: number;
  name: string;
  moves: Base[];
  pokemon_species: Base[];
  types: Base[]
}