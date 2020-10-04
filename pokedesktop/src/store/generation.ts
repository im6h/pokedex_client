/**
 *
 * @author im6h
 *
 * Create at 5/9/2020.
 * Update at 4/10/2020
 *
 */
import { action, observable } from "mobx";
import { createContext } from "react";
import generationApi from "../service/generation";
import Base from "../interface/base";
import Generation from "../interface/generation";

const initGeneration: Generation = {
  id: 0,
  name: "",
  moves: [
    {
      name: "",
      url: "",
    },
  ],
  pokemon_species: [
    {
      name: "",
      url: "",
    },
  ],
  types: [
    {
      name: "",
      url: "",
    },
  ],
  abilities: [
    {
      name: "",
      url: "",
    },
  ],
};
class GenerationStore {
  @observable generations: Base[] = [];
  @observable generation: Generation = initGeneration;
  @observable error: number = 0;

  @action
  async getGenerations(): Promise<void> {
    try {
      let response = await generationApi.getAllGeneration();
      if (response.status === 200 && response.data) {
        this.error = 0;
        this.generations = response.data.results;
      } else {
        this.error = 1;
        this.generations = [];
      }
    } catch (error) {
      console.log("err", error);
      this.generations = [];
      this.error = 1;
    }
  }

  @action
  async getGenerationById(idGen: string): Promise<void> {
    try {
      let response = await generationApi.getGenerationById(idGen);
      if (response.status === 200 && response.data) {
        this.generation = response.data;
      } else {
        this.generation = initGeneration;
      }
    } catch (error) {
      console.log("err", error);
      this.generation = initGeneration;
    }
  }
}
export default createContext(new GenerationStore());
