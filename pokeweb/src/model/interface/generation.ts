import Base from 'src/model/interface/base'

export type Generation = {
  id: number
  main_region: Base
  name: string
  moves: Base[]
  pokemon_species: Base[]
  types: Base[]
  abilities: Base[]
}

export const generationInstance: Generation = {
  id: 0,
  main_region: {
    name: '',
    url: '',
  },
  name: '',
  moves: [
    {
      name: '',
      url: '',
    },
  ],
  pokemon_species: [
    {
      name: '',
      url: '',
    },
  ],
  types: [
    {
      name: '',
      url: '',
    },
  ],
  abilities: [
    {
      name: '',
      url: '',
    },
  ],
}
