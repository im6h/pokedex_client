import Base from './base'

export type Move = {
  id?: number | null
  name?: string | null
  accuracy?: number | null
  power?: number | null
  type?: Base | null
  pp?: number | null
  damage_class?: Base | null
  contest_type?: Base | null
  generation?: Base | null
  flavor_text_entries?:
    | [
        {
          flavor_text: string
          language: Base
          version: Base
        },
      ]
    | null
}
