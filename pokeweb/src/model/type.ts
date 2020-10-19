import { createModel } from '@rematch/core'
import api from 'src/service/type'
import { List } from './interface/list'
import { Type } from './interface/type'
import { RootModel } from '.'

type TypeState = {
  types: List
  type: Type
}
export const type = createModel<RootModel>()({
  state: {
    types: {},
    type: {},
  } as TypeState,
  reducers: {
    setTypes(state, payload: List) {
      return {
        ...state,
        types: payload,
      }
    },
    setType(state, payload: Type) {
      return {
        ...state,
        type: payload,
      }
    },
  },
  effects: (dispatch) => ({
    async getTypes(offset: number) {
      const res = await api.getTypes(offset)
      if (res.status === 200 && res.data) {
        dispatch.type.setTypes(res.data)
      } else {
        dispatch.type.setTypes({})
      }
    },
    async getType(id: number) {
      const res = await api.getType(id)
      if (res.status === 200 && res.data) {
        dispatch.type.setType(res.data)
      } else {
        dispatch.type.setType({})
      }
    },
  }),
})
