/**
 *
 * @author im6h
 *
 * Create at 2/9/2020.
 * Update at 11/9/2020.
 *
 */

import React from "react";
import styled from "styled-components";
import colorStore from "../../asset/style/color";
import { formatNamePokemon } from "../../util/functionHelper";

function Chip({ name }: any) {
  return (
    <ChipBase>
      <ChipWrapper>
        <ChipType className="chip__type">{formatNamePokemon(name)}</ChipType>
      </ChipWrapper>
    </ChipBase>
  );
}
const ChipBase = styled.div`
  height: 28px;
  width: 70px;
  display: flex;
  border: 1px solid transparent;
  border-radius: 20px;
  &-fire {
    background: ${colorStore.typeFire};
    color: white;
  }

  &-watter {
    background: ${colorStore.typeWater};
    color: white;
  }

  &-grass {
    background: ${colorStore.typeGrass};
    color: white;
  }

  &-dragon {
    background: ${colorStore.typeDragon};
    color: white;
  }

  &-electronic {
    background: ${colorStore.typeElectric};
    color: white;
  }

  &-dark {
    background: ${colorStore.typeDark};
    color: white;
  }

  &-ground {
    background: ${colorStore.typeGround};
    color: white;
  }

  &-flying {
    background: ${colorStore.typeFlying};
    color: white;
  }

  &-normal {
    background: ${colorStore.typeNormal};
    color: white;
  }

  &-psychic {
    background: ${colorStore.typePsychic};
    color: white;
  }

  &-poison {
    background: ${colorStore.typePoison};
    color: white;
  }

  &-rock {
    background: ${colorStore.typeRock};
    color: white;
  }

  &-steel {
    background: ${colorStore.typeSteel};
    color: white;
  }

  &-fairy {
    background: ${colorStore.typeFairy};
    color: white;
  }

  &-ice {
    background: ${colorStore.typeIce};
    color: white;
  }

  &-bug {
    background: ${colorStore.typeBug};
    color: white;
  }

  &-fighting {
    background: ${colorStore.typeFighting};
    color: white;
  }
`;
const ChipWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: transparent;
`;
const ChipType = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
export default Chip;
