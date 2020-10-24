import Base from './base'

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
export const pokemonInstance: Pokemon = {
  name: '',
  id: 0,
  height: 0,
  weight: 0,
  types: [
    {
      slot: 0,
      type: {
        name: '',
        url: '',
      },
    },
  ],
  stats: [
    {
      base_stat: 0,
      effort: 0,
      stat: {
        name: '',
        url: '',
      },
    },
  ],
  moves: [
    {
      move: {
        name: '',
        url: '',
      },
    },
  ],
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
export const pokemonSpecialInstance: PokemonSpecial = {
  base_happiness: '',
  capture_rate: '',
  flavor_text_entries: [
    {
      flavor_text: '',
      language: {
        name: '',
        url: '',
      },
      version: {
        name: '',
        url: '',
      },
    },
  ],
  is_legendary: false,
  is_mythical: false,
}
