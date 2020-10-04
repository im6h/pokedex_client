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
import moveApi from "../service/move";
import Base from "../interface/base";
import Move from "../interface/move";

const moveInit: Move = {
  id: 0,
  name: "",
  accuracy: 0,
  power: 0,
  type: {
    name: "",
    url: "",
  },
  pp: 0,
  damage_class: {
    name: "",
    url: "",
  },
  contest_type: {
    name: "",
    url: "",
  },
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
      version: {
        name: "",
        url: "",
      },
    },
  ],
};

class MoveStore {
  @observable moves: Base[] = [];
  @observable move: Move = moveInit;
  @observable error: number = 0;
  @observable page: number = 0;

  @action
  async getMoves(offset: number, limit: number): Promise<void> {
    try {
      let response = await moveApi.getAllMoves(offset, limit);
      if (response.status === 200 && response.data) {
        this.page = offset;
        this.error = 0;
        if (offset === 0) {
          this.moves = response.data.results;
        } else {
          this.moves = [...this.moves, ...response.data.results];
        }
        if (response.data.next === null) {
          this.error = 2;
        }
      } else {
        this.error = 1;
        this.moves = [];
        console.log("res", response.data);
      }
    } catch (error) {
      console.log("err", error);
      this.moves = [];
      this.error = 1;
    }
  }

  @action
  async getDetailMove(idMove: string): Promise<void> {
    try {
      let response = await moveApi.getMoveById(idMove);
      if (response.status === 200 && response.data) {
        this.move = response.data;
      }
    } catch (error) {
      console.log("err", error);
      this.move = moveInit;
    }
  }
}

export default createContext(new MoveStore());
