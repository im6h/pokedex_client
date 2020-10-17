import React from 'react'
import { GridList, GridListTile } from '@material-ui/core'
import styled from 'styled-components'

import Navbar from '../../components/navbar'
import Pokemon from '../../components/pokemon'

const Home: React.FC = () => {
  const data: string[] = ['pokemon', 'move', 'type', 'hello', 'js', 'ts']
  const url =
    'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png'
  return (
    <>
      <div>
        <Navbar />
        <Content>
          <GridList cellHeight="auto" cols={4}>
            {data.map((tile: string) => (
              <GridListTile key={tile}>
                <Pokemon url={url} alt={tile} />
              </GridListTile>
            ))}
          </GridList>
        </Content>
      </div>
    </>
  )
}
const Content = styled.div`
  margin-top: 12px;
`
export default Home
