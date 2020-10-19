import Base from './base'

export type Type = {
  id: number
  name: string
  generation: Base
  move_damage_class: Base
  moves: Base[]
  pokemon: [
    {
      pokemon: Base
      slot: number
    },
  ]
  damage_relations: {
    double_damage_from: Base[]
    double_damage_to: Base[]
    half_damage_from: Base[]
    half_damage_to: Base[]
    no_damage_from: Base[]
    no_damage_to: Base[]
  }
}
