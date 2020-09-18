import { action, observable } from "mobx";
import { createContext } from "react";
import abilityApi from "../service/ability";
import Base from "../interface/base";
class AbilityStore {
  @observable abilities: Base[] = [];
  @observable error: number = 0;
  @observable page: number = 0;

  @action
  async getAbilities(offset: number, limit: number) {
    try {
      let response = await abilityApi.getAllAbilities(offset, limit);
      if (response.status === 200 && response.data) {
        this.page = offset;
        this.error = 0;
        if (offset === 0) {
          this.abilities = response.data.results;
        } else {
          this.abilities = [...this.abilities, ...response.data.results];
        }
        if (response.data.next === null) {
          this.error = 2;
        }
      } else {
        this.error = 1;
        this.abilities = [];
        console.log("res", response.data);
      }
    } catch (error) {
      console.log("err", error);
      this.abilities = [];
      this.error = 1;
    }
  }
}

export default createContext(new AbilityStore());
