/**
 *
 * @author im6h
 *
 * Create at 29/9/2020.
 * Update at 29/9/2020
 *
 */
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { List, Typography } from "antd";
import colorStore from "../../asset/style/color";
import {
  convertNumberIdPokemon,
  formatNamePokemon,
  splitNumberIdPokemon,
} from "../../util/functionHelper";
import Base from "../../interface/base";
interface AbilityProps {
  ability?: [
    {
      ability: Base;
    },
  ];
  abilityCustom?: Base[];
}
const Ability = ({ ability, abilityCustom }: AbilityProps) => {
  const history = useHistory();
  const handleOnClick = (id: string) => {
    history.push(`/ability/${id}`);
  };
  return (
    <div
      style={{
        margin: "0px 20px",
        height: "50vh",
      }}
    >
      <AbilityList>
        {ability && (
          <List
            style={{
              width: "100%",
            }}
            itemLayout="horizontal"
            dataSource={ability}
            renderItem={(e: any) => {
              let id: string = splitNumberIdPokemon(e.ability.url);
              let _idAbility: number = parseInt(id);
              return (
                <List.Item
                  style={{
                    textAlign: "left",
                    margin: "0px 40px",
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
                    {`#${convertNumberIdPokemon(_idAbility)}`}
                  </Typography.Text>
                  {formatNamePokemon(e.ability.name)}
                </List.Item>
              );
            }}
          />
        )}
        {abilityCustom && (
          <List
            style={{
              width: "100%",
            }}
            itemLayout="horizontal"
            dataSource={abilityCustom}
            renderItem={(e: any) => {
              let id: string = splitNumberIdPokemon(e.url);
              let _idAbility: number = parseInt(id);
              return (
                <List.Item
                  style={{
                    textAlign: "left",
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
                    {`#${convertNumberIdPokemon(_idAbility)}`}
                  </Typography.Text>
                  {formatNamePokemon(e.name)}
                </List.Item>
              );
            }}
          />
        )}
      </AbilityList>
    </div>
  );
};
const AbilityList = styled.div`
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
export default Ability;
