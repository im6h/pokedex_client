import { action, observable } from "mobx";
import { createContext } from "react";
import typeApi from "../service/type";
import Base from "../interface/base";

class TypeStore {
  @observable types: Base[] = [];
  @observable error: number = 0;

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
}
export default createContext(new TypeStore());
