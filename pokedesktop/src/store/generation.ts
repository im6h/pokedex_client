import { action, observable } from "mobx";
import { createContext } from "react";
import generationApi from "../service/generation";
import Base from "../interface/base";
class GenerationStore {
  @observable generations: Base[] = [];
  @observable error: number = 0;

  @action
  async getGenerations() {
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
}
export default createContext(new GenerationStore());
