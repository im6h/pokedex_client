/**
 *
 * @author im6h
 *
 * Create at 2/9/2020.
 * Update at 13/9/2020.
 *
 */

import React from "react";
import styled from "styled-components";
import { formatNamePokemon } from "../../util/functionHelper";
import "./Chip.scss";

function Chip({ name }: any) {
  return (
    <ChipBase className={`chip-${name}`}>
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
