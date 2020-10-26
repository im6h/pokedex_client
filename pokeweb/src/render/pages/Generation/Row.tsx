import React, { useEffect, useState } from 'react'
import api from 'src/service/generation'
import { TableRow, TableCell, Tooltip } from '@material-ui/core'
import { formatNamePokemon, formatGenerationName } from 'src/util/formatString'
import { Generation, generationInstance } from 'src/model/interface/generation'
import { useHistory } from 'react-router-dom'

type Props = {
  idx: number
}

const Row: React.FC<Props> = (props: Props) => {
  const { idx } = props
  const [generation, setGenerations] = useState<Generation>(generationInstance)
  const history = useHistory()
  const fetchData = async () => {
    const res = await api.getGeneration(idx)
    if (res.status === 200 && res.data) {
      setGenerations(res.data)
    }
  }
  const clickPokemon = (): void => {
    history.push(`/generation/${idx}/pokemon`)
  }
  const clickMove = (): void => {
    history.push(`/generation/${idx}/move`)
  }
  const clickAbility = (): void => {
    history.push(`/generation/${idx}/ability`)
  }
  const clickType = (): void => {
    history.push(`/generation/${idx}/type`)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <TableRow
        style={{
          cursor: 'pointer',
        }}
      >
        <TableCell align="left">{generation.id}</TableCell>{' '}
        <TableCell align="left">
          {formatGenerationName(generation.name || 'Hello-Hello') || '-'}
        </TableCell>
        <TableCell align="left">
          {formatNamePokemon(generation.main_region?.name || 'Pikachu') ||
            'Pikachu'}
        </TableCell>
        <TableCell align="left" onClick={clickMove}>
          <Tooltip title={`move generation ${idx}`} placement="top-start">
            <span>+ {generation.moves?.length}</span>
          </Tooltip>
        </TableCell>
        <TableCell align="left" onClick={clickPokemon}>
          <Tooltip title={`pokemon generation ${idx}`} placement="top-start">
            <span>+ {generation.pokemon_species?.length}</span>
          </Tooltip>
        </TableCell>
        <TableCell align="left" onClick={clickAbility}>
          <Tooltip title={`ability generation ${idx}`} placement="top-start">
            <span>+ {generation.abilities?.length}</span>
          </Tooltip>
        </TableCell>
        <TableCell align="left" onClick={clickType}>
          <Tooltip title={`type generation ${idx}`} placement="top-start">
            <span>+ {generation.types?.length}</span>
          </Tooltip>
        </TableCell>
      </TableRow>
    </>
  )
}

export default Row
