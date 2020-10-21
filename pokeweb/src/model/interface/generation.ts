import Base from 'src/model/interface/base'

export type Generation = {
  id?: number
  main_region?: Base
  name?: string
  moves?: Base[]
  pokemon_species?: Base[]
  types?: Base[]
  abilities?: Base[]
}
