import React, { useEffect } from 'react'
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, Dispatch } from 'src/store'
import { formatGenerationName } from 'src/util/formatString'
import styled from 'styled-components'
import Row from './Row'

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})
const Generation: React.FC = () => {
  const classes = useStyles()
  const store = useSelector((state: RootState) => state.generation)
  const move = useSelector((state: RootState) => state.move)
  const pokemon = useSelector((state: RootState) => state.pokemon)
  const { generations } = store
  const { results } = generations
  const dispatch = useDispatch<Dispatch>()
  useEffect(() => {
    dispatch.generation.getGenerations()
    dispatch.move.getMoves()
    dispatch.pokemon.getPokemons()
  }, [])

  return (
    <>
      <div
        style={{
          marginTop: '10px',
        }}
      >
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Region</TableCell>
                <TableCell align="left">Moves</TableCell>
                <TableCell align="left">Pokemons</TableCell>
                <TableCell align="left">Abilities</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results?.map((row: any, idx: number) => (
                <Row key={idx} idx={idx + 1} />
              ))}

              <TableCell align="left">-</TableCell>
              <TableCell align="left">-</TableCell>
              <TableCell align="left">-</TableCell>
              <TableCell align="left">{move?.moves?.count}</TableCell>
              <TableCell align="left">{pokemon?.pokemons?.count}</TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}
export default Generation
