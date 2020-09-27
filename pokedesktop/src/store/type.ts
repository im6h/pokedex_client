import { action, observable } from "mobx";
import { createContext } from "react";
import typeApi from "../service/type";
import Base from "../interface/base";
import TypeDetail from "../interface/type";

const initType: TypeDetail = {
  id: 0,
  name: "",
  generation: {
    name: "",
    url: "",
  },
  move_damage_class: {
    name: "",
    url: "",
  },
  moves: [
    {
      name: "",
      url: "",
    },
  ],
  pokemon: [
    {
      pokemon: {
        name: "",
        url: "",
      },
      slot: 0,
    },
  ],
  damage_relations: {
    double_damage_from: [
      {
        name: "",
        url: "",
      },
    ],
    double_damage_to: [
      {
        name: "",
        url: "",
      },
    ],
    half_damage_from: [
      {
        name: "",
        url: "",
      },
    ],
    half_damage_to: [
      {
        name: "",
        url: "",
      },
    ],
    no_damage_from: [
      {
        name: "",
        url: "",
      },
    ],
    no_damage_to: [
      {
        name: "",
        url: "",
      },
    ],
  },
};
class TypeStore {
  @observable types: Base[] = [];
  @observable error: number = 0;
  @observable type: TypeDetail = initType;

  @action
  async getTypes() {
    try {
      let response = await typeApi.getAllTypes();
      if (response.status === 200 && response.data) {
        this.error = 0;
        this.types = response.data.results;
      } else {
        this.error = 1;
        this.types = [];
      }
    } catch (error) {
      console.log("err", error);
      this.types = [];
      this.error = 1;
    }
  }
  @action
  async getTypeById(idType: string) {
    try {
      let response = await typeApi.getTypeById(idType);
      if (response.status === 200 && response.data) {
        this.type = response.data;
      }
    } catch (error) {
      console.log("err", error);
    }
  }
}
export default createContext(new TypeStore());
