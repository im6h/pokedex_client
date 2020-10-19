import Base from './base'

export type Pokemons = {
  count: number
  next: string
  previous: string
  results: Base[]
}
export type Pokemon = {
  name: string
  id: number
  height: number
  weight: number
  types: [
    {
      slot: number
      type: Base
    },
  ]
  stats: [
    {
      base_stat: number
      effort: number
      stat: Base
    },
  ]
  moves: [
    {
      move: Base
    },
  ]
}
export type PokemonSpecial = {
  base_happiness: string
  capture_rate: string
  flavor_text_entries: [
    {
      flavor_text: string
      language: Base
      version: Base
    },
  ]
  is_legendary: boolean
  is_mythical: boolean
}
