/**
 *
 * @author im6h
 *
 * Create at 5/9/2020.
 * Update at 5/9/2020.
 *
 */
import {action, observable} from "mobx";
import {createContext} from 'react'
import Base from "../interface/base";
import pokedexApi from "../service/pokedex";

class PokedexStore {
  @observable pokedex: Base[] = [];

  @action
  async getPokedex(offset: number, limit: number) {
    try {
      let response = await pokedexApi.getAllPokemon(offset, limit)
      if (response.status === 200 && response.data) {
        if (offset === 0) {
          this.pokedex = response.data.results;
        } else {
          this.pokedex = [...this.pokedex, ...response.data.results];
        }
      } else {
        this.pokedex = [];
        console.log('res', response.data)
      }
    } catch (error) {
      console.log('err', error);
      this.pokedex = []
    }
  }
}

export default createContext(new PokedexStore())
