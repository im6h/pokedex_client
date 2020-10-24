import { createModel } from '@rematch/core'
import api from 'src/service/item'
import { List, listInstance } from './interface/list'
import { Item, itemInstance } from './interface/item'
import { RootModel } from '.'

type ItemState = {
  items: List
  item: Item
}
export const item = createModel<RootModel>()({
  state: {
    items: {},
    item: {},
  } as ItemState,
  reducers: {
    setItems(state, payload: List) {
      return {
        ...state,
        items: payload,
      }
    },
    setItem(state, payload: Item) {
      return {
        ...state,
        item: payload,
      }
    },
  },
  effects: (dispatch) => ({
    async getPokemons(offset: number) {
      const res = await api.getItems(offset)
      if (res.status === 200 && res.data) {
        dispatch.item.setItems(res.data)
      } else {
        dispatch.item.setItems(listInstance)
      }
    },
    async getItem(id: number) {
      const res = await api.getItem(id)
      if (res.status === 200 && res.data) {
        dispatch.item.setItem(res.data)
      } else {
        dispatch.item.setItem(itemInstance)
      }
    },
  }),
})
