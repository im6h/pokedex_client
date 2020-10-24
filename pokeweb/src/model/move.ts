import { createModel } from '@rematch/core'
import api from 'src/service/move'
import { List, listInstance } from './interface/list'
import { Move, moveInstance } from './interface/move'
import { RootModel } from '.'

type MoveState = {
  moves: List
  move: Move
}
export const move = createModel<RootModel>()({
  state: {
    moves: {},
    move: {},
  } as MoveState,

  reducers: {
    setMoves(state, payload: List) {
      return {
        ...state,
        moves: payload,
      }
    },
    setMove(state, payload: Move) {
      return {
        ...state,
        move: payload,
      }
    },
  },

  effects: (dispatch) => ({
    async getMoves(offset: number) {
      const res = await api.getMoves(offset)
      if (res.status === 200 && res.data) {
        dispatch.move.setMoves(res.data)
      } else {
        dispatch.move.setMoves(listInstance)
      }
    },
    async getMove(id: number) {
      const res = await api.getMove(id)
      if (res.status === 200 && res.data) {
        dispatch.move.setMove(res.data)
      } else {
        dispatch.move.setMove(moveInstance)
      }
    },
  }),
})
