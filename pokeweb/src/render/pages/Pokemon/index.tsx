import React, { useEffect } from 'react';
import styled from 'styled-components';
import Wrapper from 'src/render/pages/Pokemon/Wrapper';
import Base from 'src/model/interface/base';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatch } from 'src/store';
import { useParams } from 'react-router-dom';
import { byNumber } from 'src/util/sort';

const Pokemon: React.FC = () => {
  const generation = useSelector((state: RootState) => state.generation);
  const dispatch = useDispatch<Dispatch>();
  const { id } = useParams();
  const { pokemon_species } = generation.generation;
  const pokemons = byNumber(pokemon_species);

  useEffect(() => {
    dispatch.generation.getGeneration(id);
  }, []);

  return (
    <>
      <div>
        <Content>
          <Grid container spacing={1}>
            {pokemons?.map((el: Base) => (
              <Grid item lg={2} md={4} sm={6} xs={12} key={el.name}>
                <Wrapper url={el.url} name={el.name} />
              </Grid>
            ))}
          </Grid>
        </Content>
      </div>
    </>
  );
};
const Content = styled.div`
  margin-top: 12px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 88vh;
`;
export default Pokemon;
