import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Row from './Row'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

const useStyles = makeStyles({
  root: {
    marginTop: '10px',
  },
  table: {
    minWidth: 650,
  },
})

const WrapperTable: React.FC = () => {
  const store = useSelector((state: RootState) => state.generation)
  const move = useSelector((state: RootState) => state.move)
  const pokemon = useSelector((state: RootState) => state.pokemon)
  const ability = useSelector((state: RootState) => state.ability)
  const type = useSelector((state: RootState) => state.type)
  const { generations } = store
  const { results } = generations
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
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
                <TableCell align="left">Types</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results?.map((row: any, idx: number) => (
                <Row key={idx} idx={idx + 1} />
              ))}
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left">Total</TableCell>
              <TableCell align="left">{move?.moves?.count}</TableCell>
              <TableCell align="left">{pokemon?.pokemons?.count}</TableCell>
              <TableCell align="left">{ability?.abilities?.count}</TableCell>
              <TableCell align="left">{type?.types?.count}</TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}
export default WrapperTable
