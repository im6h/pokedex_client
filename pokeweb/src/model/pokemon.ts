import { createModel } from '@rematch/core'
import api from 'src/service/pokemon'
import { List, listInstance } from './interface/list'
import {
  Pokemon,
  PokemonSpecial,
  pokemonInstance,
  pokemonSpecialInstance,
} from './interface/pokemon'
import { RootModel } from '.'

type PokemonState = {
  pokemons: List
  pokemon: Pokemon
  special: PokemonSpecial
}
export const pokemon = createModel<RootModel>()({
  state: {
    pokemons: {},
    pokemon: {},
    special: {},
  } as PokemonState,

  reducers: {
    setPokemons(state, payload: List) {
      return {
        ...state,
        pokemons: payload,
      }
    },
    setPokemon(state, payload: Pokemon) {
      return {
        ...state,
        pokemon: payload,
      }
    },
    setSpecial(state, payload: PokemonSpecial) {
      return {
        ...state,
        special: payload,
      }
    },
  },

  effects: (dispatch) => ({
    async getPokemons(offset: number) {
      const res = await api.getPokemons(offset)
      if (res.status === 200 && res.data) {
        dispatch.pokemon.setPokemons(res.data)
      } else {
        dispatch.pokemon.setPokemons(listInstance)
      }
    },
    async getPokemon(id: number) {
      const res = await api.getPokemon(id)
      if (res.status === 200 && res.data) {
        dispatch.pokemon.setPokemon(res.data)
      } else {
        dispatch.pokemon.setPokemon(pokemonInstance)
      }
    },
    async getSpecial(id: number) {
      const res = await api.getSpecial(id)
      if (res.status === 200 && res.data) {
        dispatch.pokemon.setSpecial(res.data)
      } else {
        dispatch.pokemon.setSpecial(pokemonSpecialInstance)
      }
    },
  }),
})
