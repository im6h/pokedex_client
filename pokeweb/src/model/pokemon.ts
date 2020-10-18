import { createModel } from '@rematch/core'
import api from 'src/service/pokemon'
import { Pokemon } from './interface/pokemon'
import { RootModel } from '.'

type PokemonState = {
  pokemons: Pokemon
}
export const pokemon = createModel<RootModel>()({
  state: {
    pokemons: {},
  } as PokemonState,
  reducers: {
    setPokemons(state, payload: Pokemon) {
      return {
        ...state,
        pokemons: payload,
      }
    },
  },
  effects: (dispatch) => ({
    async getPokemons(offset: number) {
      const res = await api.getPokemons(offset)
      if (res.status === 200 && res.data) {
        dispatch.pokemons.setPokemons(res.data)
      } else {
        dispatch.pokemons.setPokemons({})
      }
    },
  }),
})
