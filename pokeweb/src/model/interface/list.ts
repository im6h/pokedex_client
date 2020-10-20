import Base from './base'

export type List = {
  count?: number | null
  next?: string | null
  previous?: string | null
  results?: Base[] | null
}
