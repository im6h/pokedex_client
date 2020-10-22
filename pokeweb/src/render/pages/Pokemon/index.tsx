import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, Dispatch } from 'src/store'
import Wrapper from 'src/render/pages/Pokemon/Wrapper'
import { useParams } from 'react-router-dom'
import { handleUrlPokemon } from 'src/util/formatString'
import Base from 'src/model/interface/base'

const Pokemon: React.FC = () => {
  const generation = useSelector((state: RootState) => state.generation)
  const dispatch = useDispatch<Dispatch>()
  const { id } = useParams()
  const { pokemon_species, moves, types, abilities } = generation.generation
  const pokemons = pokemon_species?.sort((a: Base, b: Base) => {
    return handleUrlPokemon(a.url).idNumber - handleUrlPokemon(b.url).idNumber
  })

  useEffect(() => {
    dispatch.generation.getGeneration(id)
  }, [])
  return (
    <>
      <div>
        <Content>
          <Grid container spacing={1}>
            {pokemons?.map((el: any) => (
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
