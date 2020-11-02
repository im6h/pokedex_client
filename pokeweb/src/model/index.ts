import { Models } from '@rematch/core';
import { item } from './item';
import { move } from './move';
import { pokemon } from './pokemon';
import { type } from './type';
import { generation } from './generation';
import { ability } from './ability';

export interface RootModel extends Models<RootModel> {
  item: typeof item;
  move: typeof move;
  pokemon: typeof pokemon;
  type: typeof type;
  generation: typeof generation;
  ability: typeof ability;
}
export const models: RootModel = {
  ability,
  generation,
  item,
  move,
  pokemon,
  type,
};
