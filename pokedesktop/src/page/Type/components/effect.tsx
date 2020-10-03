import React from "react";
import styled from "styled-components";
import { Descriptions, Tag } from "antd";
import Base from "../../../interface/base";
import { formatNamePokemon } from "../../../util/functionHelper";
import colorStore, { getColor } from "../../../asset/style/color";
interface EffectProps {
  double_damage_from: Base[];
  double_damage_to: Base[];
  half_damage_from: Base[];
  half_damage_to: Base[];
  no_damage_from: Base[];
  no_damage_to: Base[];
}
const Effect = ({
  double_damage_from,
  double_damage_to,
  no_damage_from,
  no_damage_to,
  half_damage_from,
  half_damage_to,
}: EffectProps) => {
  return (
    <>
      <TableEffect>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="x2 damage to">
            {double_damage_to.map((e: Base, index: number) => {
              return (
                <span key={index}>
                  <Tag
                    style={{
                      marginTop: "10px",
                    }}
                    color={getColor(e.name)}
                  >
                    {formatNamePokemon(e.name)}
                  </Tag>
                </span>
              );
            })}
          </Descriptions.Item>
          <Descriptions.Item label="1/2 damage to">
            {half_damage_to.map((e: Base, index: number) => {
              return (
                <span key={index}>
                  <Tag
                    style={{
                      marginTop: "10px",
                    }}
                    color={getColor(e.name)}
                  >
                    {formatNamePokemon(e.name)}
                  </Tag>
                </span>
              );
            })}
          </Descriptions.Item>
          <Descriptions.Item label="No damage to">
            {no_damage_to.map((e: Base, index: number) => {
              return (
                <span key={index}>
                  <Tag
                    style={{
                      marginTop: "10px",
                    }}
                    color={getColor(e.name)}
                  >
                    {formatNamePokemon(e.name)}
                  </Tag>
                </span>
              );
            })}
          </Descriptions.Item>
          <Descriptions.Item label="x2 damage from">
            {double_damage_from.map((e: Base, index: number) => {
              return (
                <span key={index}>
                  <Tag
                    style={{
                      marginTop: "10px",
                    }}
                    color={getColor(e.name)}
                  >
                    {formatNamePokemon(e.name)}
                  </Tag>
                </span>
              );
            })}
          </Descriptions.Item>
          <Descriptions.Item label="1/2 damage from">
            {half_damage_from.map((e: Base, index: number) => {
              return (
                <span key={index}>
                  <Tag
                    style={{
                      marginTop: "10px",
                    }}
                    color={getColor(e.name)}
                  >
                    {formatNamePokemon(e.name)}
                  </Tag>
                </span>
              );
            })}
          </Descriptions.Item>
          <Descriptions.Item label="No damage from">
            {no_damage_from.map((e: Base, index: number) => {
              return (
                <span key={index}>
                  <Tag
                    style={{
                      marginTop: "10px",
                    }}
                    color={getColor(e.name)}
                  >
                    {formatNamePokemon(e.name)}
                  </Tag>
                </span>
              );
            })}
          </Descriptions.Item>
        </Descriptions>
      </TableEffect>
    </>
  );
};
const TableEffect = styled.div`
  height: 50vh;
  width: 100%;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colorStore.typeNormal};
  }
`;
export default Effect;
