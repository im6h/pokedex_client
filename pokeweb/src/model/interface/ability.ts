import Base from './base'

export type Ability = {
  id?: number
  name?: string
  pokemon?: [
    {
      pokemon: Base
      slot: number
    },
  ]
  generation?: Base
  flavor_text_entries?: [
    {
      flavor_text: string
      language: Base
      version_group: Base
    },
  ]
}
