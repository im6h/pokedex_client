import { Models } from '@rematch/core'
import { item } from './item'
import { move } from './move'
import { pokemon } from './pokemon'
import { type } from './type'
import { generation } from './generation'

export interface RootModel extends Models<RootModel> {
  item: typeof item
  move: typeof move
  pokemon: typeof pokemon
  type: typeof type
  generation: typeof generation
}
export const models: RootModel = { generation, item, move, pokemon, type }
