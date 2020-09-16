import React from "react";
import {
  MoveCard,
  MoveCardName,
  MoveCardNumber,
  MoveList,
} from "../../Move/style";
import {
  convertNumberIdPokemon,
  formatNamePokemon,
  splitNumberIdPokemon,
} from "../../../util/functionHelper";
import Base from "../../../interface/base";
interface MoveProps {
  moves: [
    {
      move: Base;
    },
  ];
}
const Move = ({ moves }: MoveProps) => {
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
            <MoveCard key={index}>
              <MoveCardNumber>
                <h4>{`#${convertNumberIdPokemon(_idMove)}`}</h4>
              </MoveCardNumber>
              <MoveCardName>
                <p>{formatNamePokemon(e.move.name)}</p>
              </MoveCardName>
            </MoveCard>
          );
        })}
      </MoveList>
    </div>
  );
};
export default Move;
