import Base from './base'

export type Item = {
  id?: number | null
  name?: string | null
  cost?: number | null
  effect_entries?:
    | [
        {
          effect: string
          language: Base
          short_effect: string
        },
      ]
    | null
  flavor_text_entries?:
    | [
        {
          text: string
          language: Base
          version_group: Base
        },
      ]
    | null
  category?: Base | null
  attributes?: Base[] | null
}
