import Base from './base'

export type Item = {
  id: number
  name: string
  cost: number
  effect_entries: [
    {
      effect: string
      language: Base
      short_effect: string
    },
  ]
  flavor_text_entries: [
    {
      text: string
      language: Base
      version_group: Base
    },
  ]
  category: Base
  attributes: Base[]
}
export const itemInstance: Item = {
  id: 0,
  name: '',
  cost: 0,
  effect_entries: [
    {
      effect: '',
      language: {
        name: '',
        url: '',
      },
      short_effect: '',
    },
  ],
  flavor_text_entries: [
    {
      text: '',
      language: {
        name: '',
        url: '',
      },
      version_group: {
        name: '',
        url: '',
      },
    },
  ],
  category: {
    name: '',
    url: '',
  },
  attributes: [
    {
      name: '',
      url: '',
    },
  ],
}
