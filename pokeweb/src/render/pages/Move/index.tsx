import React, { useEffect } from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, Dispatch } from 'src/store'
import { useParams } from 'react-router-dom'

const Move: React.FC = () => {
  const generation = useSelector((state: RootState) => state.generation)
  const dispatch = useDispatch<Dispatch>()
  const { id } = useParams()
  const { moves } = generation.generation

  useEffect(() => {
    dispatch.generation.getGeneration(id)
  }, [])
  return (
    <>
      <div>
        <Content>
          <Grid container spacing={1}>
            {moves?.map((el: any) => (
              <Grid item lg={2} md={3} sm={4} xs={12} key={el.name}>
                <Wrapper name={el.name} url={el.url} />
              </Grid>
            ))}
          </Grid>
        </Content>
      </div>
    </>
  )
}

const Content = styled.div`
  margin-top: 12px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 88vh;
`
export default Move
