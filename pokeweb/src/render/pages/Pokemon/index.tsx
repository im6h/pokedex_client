import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, Dispatch } from 'src/store'
import Wrapper from 'src/render/pages/Pokemon/Wrapper'

const Pokemon: React.FC = () => {
  const pokemon = useSelector((state: RootState) => state.pokemon)
  const dispatch = useDispatch<Dispatch>()

  useEffect(() => {
    dispatch.pokemon.getPokemons(1)
  }, [])
  return (
    <>
      <div>
        <Content>
          <Grid container spacing={1}>
            {pokemon.pokemons?.results?.map((el: any) => (
              <Grid item lg={2} md={4} sm={6} xs={12} key={el.name}>
                <Wrapper url={el.url} name={el.name} />
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
export default Pokemon
