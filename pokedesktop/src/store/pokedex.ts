/**
 *
 * @author im6h
 *
 * Create at 5/9/2020.
 * Update at 6/9/2020
 *
 */
import { action, observable } from "mobx";
import { createContext } from "react";
import Base from "../interface/base";
import pokedexApi from "../service/pokedex";

class PokedexStore {
  @observable pokedex: Base[] = [];
  @observable error: number = 0;

  @action
  async getPokedex(offset: number, limit: number) {
    try {
      let response = await pokedexApi.getAllPokemon(offset, limit);
      if (response.status === 200 && response.data) {
        this.error = 0;
        if (offset === 0) {
          this.pokedex = response.data.results;
        } else {
          this.pokedex = [...this.pokedex, ...response.data.results];
        }
        if (response.data.results.length === 0) {
          this.error = 2;
        }
      } else {
        this.error = 1;
        this.pokedex = [];
        console.log("res", response.data);
      }
    } catch (error) {
      console.log("err", error);
      this.pokedex = [];
      this.error = 1;
    }
  }
}

export default createContext(new PokedexStore());
