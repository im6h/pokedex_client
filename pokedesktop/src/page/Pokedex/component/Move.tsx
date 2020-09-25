/**
 *
 * @author im6h
 *
 * Create at 13/9/2020.
 * Update at 25/9/2020
 *
 */
import React from "react";
import styled from "styled-components";
import { List, Typography } from "antd";
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
        <List
          style={{
            width: "100%",
          }}
          itemLayout="horizontal"
          dataSource={moves}
          renderItem={(e: any) => {
            let id: string = splitNumberIdPokemon(e.move.url);
            let _idMove: number = parseInt(id);
            return (
              <List.Item
                style={{
                  textAlign: "left",
                  margin: "0px 40px",
                  color: getColor(colorPokemon),
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                <Typography.Text
                  style={{
                    marginRight: "40px",
                  }}
                >
                  {`#${convertNumberIdPokemon(_idMove)}`}
                </Typography.Text>
                {formatNamePokemon(e.move.name)}
              </List.Item>
            );
          }}
        />
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
    width: 100%;
    margin: 0px;
  }
  overflow-y: auto;
`;
export default Move;
