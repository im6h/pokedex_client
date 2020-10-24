import Base from './base'

export type Move = {
  id: number
  name: string
  accuracy: number
  power: number
  type: Base
  pp: number
  damage_class: Base
  contest_type: Base
  generation: Base
  flavor_text_entries: [
    {
      flavor_text: string
      language: Base
      version: Base
    },
  ]
}

export const moveInstance: Move = {
  id: 0,
  name: '',
  accuracy: 0,
  power: 0,
  type: {
    name: '',
    url: '',
  },
  pp: 0,
  damage_class: {
    name: '',
    url: '',
  },
  contest_type: {
    name: '',
    url: '',
  },
  generation: {
    name: '',
    url: '',
  },
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
}
