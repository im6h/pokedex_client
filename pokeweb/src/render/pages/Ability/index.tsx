import React, { useEffect } from 'react';
import styled from 'styled-components';
import Wrapper from 'src/render/pages/Ability/Wrapper';
import Base from 'src/model/interface/base';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatch } from 'src/store';
import { useParams } from 'react-router-dom';

const Ability: React.FC = () => {
  const generation = useSelector((state: RootState) => state.generation);
  const dispatch = useDispatch<Dispatch>();
  const { id } = useParams();
  const { abilities } = generation.generation;

  useEffect(() => {
    dispatch.generation.getGeneration(id);
  }, []);

  return (
    <>
      <div>
        <Content>
          {abilities?.length > 0 ? (
            <Grid container spacing={1}>
              {abilities?.map((el: Base) => (
                <Grid item lg={2} md={3} sm={4} xs={12} key={el.name}>
                  <Wrapper url={el.url} name={el.name} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <NoData>
              <SentimentVeryDissatisfiedIcon style={{ fontSize: 100 }} />
              <Typography color="error" variant="h5" gutterBottom>
                No Data
              </Typography>
            </NoData>
          )}
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
const NoData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export default Ability;
