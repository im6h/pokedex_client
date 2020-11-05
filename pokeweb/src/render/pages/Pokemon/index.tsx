import React, { useEffect } from 'react';
import styled from 'styled-components';
import Wrapper from 'src/render/pages/Pokemon/Wrapper';
import Base from 'src/model/interface/base';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatch } from 'src/store';
import { useParams } from 'react-router-dom';
import { byNumber } from 'src/util/sort';
import Detail from './Detail';

const Pokemon: React.FC = () => {
  const generation = useSelector((state: RootState) => state.generation);
  const dispatch = useDispatch<Dispatch>();
  const { id } = useParams();
  const { pokemon_species } = generation.generation;
  const pokemons = byNumber(pokemon_species);

  useEffect(() => {
    dispatch.generation.getGeneration(id);
    dispatch.pokemon.getPokemon(1);
    dispatch.pokemon.getSpecial(1);
  }, []);

  return (
    <>
      <Body>
        <Detail></Detail>
        <Content>
          {pokemons?.map((el: Base) => (
            <Grid item lg={12} md={12} sm={12} xs={12} key={el.name}>
              <Wrapper url={el.url} name={el.name} />
            </Grid>
          ))}
        </Content>
      </Body>
    </>
  );
};

const Body = styled.div`
  display: flex;
`;
const Content = styled.div`
  margin-top: 12px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 88vh;
  width: 20%;
`;
export default Pokemon;
