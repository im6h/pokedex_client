/**
 *
 * @author im6h
 *
 * Create at 30/8/2020.
 * Update at 13/9/2020.
 *
 */
import { action, observable } from "mobx";
import { createContext } from "react";
import { PokemonDetail } from "../interface/pokemon";
import pokemonApi from "../service/pokemon";

const initValue: PokemonDetail = {
  name: "",
  id: 0,
  height: 0,
  weight: 0,
  types: [
    {
      slot: 0,
      type: {
        name: "",
        url: "",
      },
    },
  ],
  stats: [
    {
      base_stat: 0,
      effort: 0,
      stat: {
        name: "",
        url: "",
      },
    },
  ],
  moves: [
    {
      move: {
        name: "",
        url: "",
      },
    },
  ],
};

class PokemonStore {
  @observable pokemon: PokemonDetail = initValue;
  @observable error: number = 0;
  @action
  async getPokemon(idPokemon: number) {
    try {
      let response = await pokemonApi.getPokemonById(idPokemon);
      if (response.status === 200 && response.data) {
        this.error = 0;
        this.pokemon = response.data;
      } else {
        this.pokemon = initValue;
        console.log("res", response.data);
      }
    } catch (error) {
      this.error = 1;
      console.log("err", error);
      this.pokemon = initValue;
    }
  }
}

export default createContext(new PokemonStore());
