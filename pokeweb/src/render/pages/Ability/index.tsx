import React, { useEffect } from 'react'
import styled from 'styled-components'
import Wrapper from 'src/render/pages/Ability/Wrapper'
import Base from 'src/model/interface/base'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, Dispatch } from 'src/store'
import { useParams } from 'react-router-dom'

const Ability: React.FC = () => {
  const generation = useSelector((state: RootState) => state.generation)
  const dispatch = useDispatch<Dispatch>()
  const { id } = useParams()
  const { abilities } = generation.generation

  useEffect(() => {
    dispatch.generation.getGeneration(id)
  }, [])

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
            <div>No data</div>
          )}
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
export default Ability
