/**
 *
 * @author im6h
 *
 * Create at 13/9/2020.
 * Update at 18/9/2020
 *
 */
import React from "react";
import styled from "styled-components";
import colorStore, { getColor } from "../../../asset/style/color";
import {
  convertNumberIdPokemon,
  formatNamePokemon,
  splitNumberIdPokemon,
} from "../../../util/functionHelper";
import Base from "../../../interface/base";
interface MoveProps {
  colorPokemon: string;
  moves: [
    {
      move: Base;
    },
  ];
}
const Move = ({ colorPokemon, moves }: MoveProps) => {
  return (
    <div
      style={{
        margin: "0px 20px",
        height: "50vh",
      }}
    >
      <MoveList>
        {moves.map((e: any, index: number) => {
          let id: string = splitNumberIdPokemon(e.move.url);
          let _idMove: number = parseInt(id);
          return (
            <>
              <MoveCard key={index}>
                <MoveCardNumber>
                  <h4>{`#${convertNumberIdPokemon(_idMove)}`}</h4>
                </MoveCardNumber>
                <MoveCardName>
                  <p
                    style={{
                      color: getColor(colorPokemon),
                    }}
                  >
                    {formatNamePokemon(e.move.name)}
                  </p>
                </MoveCardName>
              </MoveCard>
              <hr />
            </>
          );
        })}
      </MoveList>
    </div>
  );
};
const MoveList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colorStore.typeNormal};
  }
  hr {
    width: 90%;
    height: 1px;
  }
  overflow-y: auto;
`;
const MoveCard = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  height: 100%;
  position: relative;
  padding: 7px 0px;
  &:hover {
    cursor: pointer;
  }
`;
const MoveCardNumber = styled.div`
  margin: 2px 10px;
  text-align: right;
  font-size: 14px;
  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
const MoveCardName = styled.div`
  text-align: center;
  margin-left: 20px;
  word-break: break-all;
  p {
    font-size: 16px;
    font-weight: bold;
  }
`;
export default Move;
