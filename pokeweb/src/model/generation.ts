import { createModel } from '@rematch/core'
import api from 'src/service/generation'
import { List, listInstance } from './interface/list'
import { Generation, generationInstance } from './interface/generation'
import { RootModel } from '.'

type GenerationState = {
  generations: List
  generation: Generation
}
export const generation = createModel<RootModel>()({
  state: {
    generations: {},
    generation: {},
  } as GenerationState,

  reducers: {
    setGenerations(state, payload: List) {
      return {
        ...state,
        generations: payload,
      }
    },
    setGeneration(state, payload: Generation) {
      return {
        ...state,
        generation: payload,
      }
    },
  },

  effects: (dispatch) => ({
    async getGenerations() {
      const res = await api.getGenerations()
      if (res.status === 200 && res.data) {
        dispatch.generation.setGenerations(res.data)
      } else {
        dispatch.generation.setGenerations(listInstance)
      }
    },
    async getGeneration(id: number) {
      const res = await api.getGeneration(id)
      if (res.status === 200 && res.data) {
        dispatch.generation.setGeneration(res.data)
      } else {
        dispatch.generation.setGeneration(generationInstance)
      }
    },
  }),
})
