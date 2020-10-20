import Base from './base'

export type Pokemon = {
  name?: string | null
  id?: number | null
  height?: number | null
  weight?: number | null
  types?:
    | [
        {
          slot: number
          type: Base
        },
      ]
    | null
  stats?:
    | [
        {
          base_stat: number
          effort: number
          stat: Base
        },
      ]
    | null
  moves?:
    | [
        {
          move: Base
        },
      ]
    | null
}
export type PokemonSpecial = {
  base_happiness?: string
  capture_rate?: string
  flavor_text_entries?: [
    {
      flavor_text: string
      language: Base
      version: Base
    } | null,
  ]
  is_legendary?: boolean
  is_mythical?: boolean
}
