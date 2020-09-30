/**
 *
 * @author im6h
 *
 * Create at 27/9/2020.
 * Update at 27/9/2020
 *
 */
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { List, Typography } from "antd";
import colorStore, { getColor } from "../../asset/style/color";
import {
  convertNumberIdPokemon,
  formatNamePokemon,
  splitNumberIdPokemon,
} from "../../util/functionHelper";
import Base from "../../interface/base";
interface MoveProps {
  colorPokemon: string;
  moves?: [
    {
      move: Base;
    },
  ];
  moveCustom?: Base[];
}
const Move = ({ colorPokemon, moves, moveCustom }: MoveProps) => {
  const history = useHistory();
  const handleOnClick = (id: string) => {
    history.push(`/move/${id}`);
  };
  return (
    <div
      style={{
        margin: "0px 20px",
        height: "50vh",
      }}
    >
      <MoveList>
        {moves && (
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
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleOnClick(id);
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
        )}
        {moveCustom && (
          <List
            style={{
              width: "100%",
            }}
            itemLayout="horizontal"
            dataSource={moveCustom}
            renderItem={(e: any) => {
              let id: string = splitNumberIdPokemon(e.url);
              let _idMove: number = parseInt(id);
              return (
                <List.Item
                  style={{
                    textAlign: "left",
                    color: getColor(colorPokemon),
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleOnClick(id);
                  }}
                >
                  <Typography.Text
                    style={{
                      marginRight: "40px",
                    }}
                  >
                    {`#${convertNumberIdPokemon(_idMove)}`}
                  </Typography.Text>
                  {formatNamePokemon(e.name)}
                </List.Item>
              );
            }}
          />
        )}
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
