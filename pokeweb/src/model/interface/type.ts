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

export const typeInstance: Type = {
  id: 0,
  name: '',
  generation: {
    name: '',
    url: '',
  },
  move_damage_class: {
    name: '',
    url: '',
  },
  moves: [
    {
      name: '',
      url: '',
    },
  ],
  pokemon: [
    {
      pokemon: {
        name: '',
        url: '',
      },
      slot: 0,
    },
  ],
  damage_relations: {
    double_damage_from: [
      {
        name: '',
        url: '',
      },
    ],
    double_damage_to: [
      {
        name: '',
        url: '',
      },
    ],
    half_damage_from: [
      {
        name: '',
        url: '',
      },
    ],
    half_damage_to: [
      {
        name: '',
        url: '',
      },
    ],
    no_damage_from: [
      {
        name: '',
        url: '',
      },
    ],
    no_damage_to: [
      {
        name: '',
        url: '',
      },
    ],
  },
}
