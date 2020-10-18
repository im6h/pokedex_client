import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

import Pokemon from 'src/render/components/pokemon'

const Home: React.FC = () => {
  const data: string[] = ['pokemon', 'move', 'type', 'hello', 'js', 'ts']
  const url =
    'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png'
  return (
    <>
      <div>
        <Content>
          <Grid container spacing={1}>
            {data.map((tile: string) => (
              <Grid item lg={2} md={4} sm={6} xs={12} key={tile}>
                <Pokemon url={url} alt={tile} />
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
  height: 85vh;
`
export default Home
