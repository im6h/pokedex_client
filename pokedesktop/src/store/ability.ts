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
import abilityApi from "../service/ability";
import Base from "../interface/base";
import Ability from "../interface/ability";
import ModalError from "../component/ModalError/ModalError";

const initAbility: Ability = {
  id: 0,
  name: "",
  pokemon: [
    {
      pokemon: {
        name: "",
        url: "",
      },
      slot: 0,
    },
  ],
  generation: {
    name: "",
    url: "",
  },
  flavor_text_entries: [
    {
      flavor_text: "",
      language: {
        name: "",
        url: "",
      },
      version_group: {
        name: "",
        url: "",
      },
    },
  ],
};
class AbilityStore {
  @observable abilities: Base[] = [];
  @observable ability: Ability = initAbility;
  @observable error: number = 0;
  @observable page: number = 0;

  @action
  async getAbilities(offset: number, limit: number): Promise<void> {
    try {
      let response = await abilityApi.getAllAbilities(offset, limit);
      if (response.status === 200 && response.data) {
        this.page = offset;
        this.error = 0;
        if (offset === 0) {
          this.abilities = response.data.results;
        } else {
          this.abilities = [...this.abilities, ...response.data.results]; // merge old array and new array to result
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
      ModalError();
      this.error = 1;
    }
  }

  @action
  async getAbilityDetail(idAbility: string): Promise<void> {
    try {
      let response = await abilityApi.getAbilityById(idAbility);
      if (response.status === 200 && response.data) {
        this.ability = response.data;
      }
    } catch (error) {
      console.log("err", error);
    }
  }
}

export default createContext(new AbilityStore());
