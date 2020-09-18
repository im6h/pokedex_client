/**
 *
 * @author im6h
 *
 * Create at 5/9/2020.
 * Update at 13/9/2020
 *
 */
import { action, observable } from "mobx";
import { createContext } from "react";
import moveApi from "../service/move";
import Base from "../interface/base";

class MoveStore {
  @observable moves: Base[] = [];
  @observable error: number = 0;
  @observable page: number = 0;

  @action
  async getMoves(offset: number, limit: number) {
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
}

export default createContext(new MoveStore());
