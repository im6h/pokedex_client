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
