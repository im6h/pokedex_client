import Base from './base'

export type Type = {
  id?: number | null
  name?: string | null
  generation?: Base | null
  move_damage_class?: Base | null
  moves?: Base[] | null
  pokemon?:
    | [
        {
          pokemon: Base
          slot: number
        },
      ]
    | null
  damage_relations?: {
    double_damage_from: Base[]
    double_damage_to: Base[]
    half_damage_from: Base[]
    half_damage_to: Base[]
    no_damage_from: Base[]
    no_damage_to: Base[]
  } | null
}
