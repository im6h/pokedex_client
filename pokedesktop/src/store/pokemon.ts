/**
 *
 * @author im6h
 *
 * Create at 30/8/2020.
 * Update at 4/10/2020.
 *
 */
import { action, observable } from "mobx";
import { createContext } from "react";
import { PokemonDetail, PokemonSpecial } from "../interface/pokemon";
import pokemonApi from "../service/pokemon";

const initPokemonDetail: PokemonDetail = {
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

const initPokemonSpecail: PokemonSpecial = {
  base_happiness: "",
  capture_rate: "",
  flavor_text_entries: [
    {
      flavor_text: "",
      language: {
        name: "",
        url: "",
      },
      version: {
        name: "",
        url: "",
      },
    },
  ],
  is_legendary: false,
  is_mythical: false,
};

class PokemonStore {
  @observable pokemon: PokemonDetail = initPokemonDetail;
  @observable pokemonSpecial: PokemonSpecial = initPokemonSpecail;
  @observable error: number = 0;
  @action
  async getPokemon(idPokemon: number): Promise<void> {
    try {
      let response = await pokemonApi.getPokemonById(idPokemon);
      if (response.status === 200 && response.data) {
        this.error = 0;
        this.pokemon = response.data;
      } else {
        this.pokemon = initPokemonDetail;
        console.log("res", response.data);
      }
    } catch (error) {
      this.error = 1;
      console.log("err", error);
      this.pokemon = initPokemonDetail;
    }
  }

  @action
  async getPokemonSpecial(idPokemon: number): Promise<void> {
    try {
      let response = await pokemonApi.getPokemonSpecialById(idPokemon);
      if (response.status === 200 && response.data) {
        this.error = 0;
        this.pokemonSpecial = response.data;
      } else {
        this.pokemonSpecial = initPokemonSpecail;
        console.log("res", response.data);
      }
    } catch (error) {
      this.error = 1;
      console.log("pokes", error);
      this.pokemonSpecial = initPokemonSpecail;
    }
  }
}

export default createContext(new PokemonStore());
