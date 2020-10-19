import { Models } from '@rematch/core'
import { item } from './item'
import { move } from './move'
import { pokemon } from './pokemon'
import { type } from './type'

export interface RootModel extends Models<RootModel> {
  item: typeof item
  move: typeof move
  pokemon: typeof pokemon
  type: typeof type
}
export const models: RootModel = { item, move, pokemon, type }
