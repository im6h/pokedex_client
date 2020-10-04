/**
 *
 * @author im6h
 *
 * Create at 27/9/2020.
 * Update at 4/10/2020
 *
 */
import React from "react";
import { List } from "antd";
import Card from "../Card/Card";
import Base from "../../interface/base";
import styled from "styled-components";
import colorStore from "../../asset/style/color";
type PokeProps = {
  pokemons?: [
    {
      pokemon: Base;
      slot: number;
    }
  ];
  pokemon_species?: Base[];
};
const Pokemon: React.FC<PokeProps> = (props) => {
  const { pokemons, pokemon_species } = props;
  return (
    <>
      <Container>
        {pokemons && (
          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={pokemons}
            renderItem={(e: any) => (
              <List.Item>
                <Card name={e.pokemon.name} url={e.pokemon.url} />
              </List.Item>
            )}
          />
        )}
        {pokemon_species && (
          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={pokemon_species}
            renderItem={(e: Base) => (
              <List.Item>
                <Card name={e.name} url={e.url} />
              </List.Item>
            )}
          />
        )}
      </Container>
    </>
  );
};
const Container = styled.div`
  height: 50vh;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colorStore.typeNormal};
  }
`;
export default Pokemon;
