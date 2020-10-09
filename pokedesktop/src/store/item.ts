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
import itemApi from "../service/item";
import Base from "../interface/base";
import Item from "../interface/item";
import ModelError from "../component/ModalError/ModalError";

const initItem: Item = {
  id: 0,
  name: "",
  cost: 0,
  effect_entries: [
    {
      effect: "",
      language: {
        name: "",
        url: "",
      },
      short_effect: "",
    },
  ],
  flavor_text_entries: [
    {
      text: "",
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
  category: {
    name: "",
    url: "",
  },
  attributes: [
    {
      name: "",
      url: "",
    },
  ],
};
class ItemStore {
  @observable items: Base[] = [];
  @observable item: Item = initItem;
  @observable error: number = 0;
  @observable page: number = 0;

  @action
  async getItems(offset: number, limit: number): Promise<void> {
    try {
      let response = await itemApi.getAllItems(offset, limit);
      if (response.status === 200 && response.data) {
        this.page = offset;
        this.error = 0;
        if (offset === 0) {
          this.items = response.data.results;
        } else {
          this.items = [...this.items, ...response.data.results];
        }
        if (response.data.next === null) {
          this.error = 2;
        }
      } else {
        this.error = 1;
        this.items = [];
        console.log("res", response.data);
      }
    } catch (error) {
      ModelError();
      this.error = 1;
    }
  }
  @action
  async getItemDetail(idItem: string): Promise<void> {
    try {
      let response = await itemApi.getDetailItem(idItem);
      if (response.status === 200 && response.data) {
        this.item = response.data;
      }
    } catch (error) {
      console.log("err", error);
      this.item = initItem;
    }
  }
}
export default createContext(new ItemStore());
