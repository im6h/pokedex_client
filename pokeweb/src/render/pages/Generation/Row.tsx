import React, { useEffect, useState } from 'react'
import { TableRow, TableCell } from '@material-ui/core'
import { formatNamePokemon, formatGenerationName } from 'src/util/formatString'
import api from 'src/service/generation'
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
  const handleOnClick = (): void => {
    history.push(`/generation/${idx}`)
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
        onClick={handleOnClick}
      >
        <TableCell align="left">{generation.id}</TableCell>{' '}
        <TableCell align="left">
          {formatGenerationName(generation.name || 'Hello-Hello') || '-'}
        </TableCell>
        <TableCell align="left">
          {formatNamePokemon(generation.main_region?.name || 'Pikachu') ||
            'Pikachu'}
        </TableCell>
        <TableCell align="left">+ {generation.moves?.length}</TableCell>
        <TableCell align="left">
          + {generation.pokemon_species?.length}
        </TableCell>
        <TableCell align="left">+ {generation.abilities?.length}</TableCell>
      </TableRow>
    </>
  )
}

export default Row
export default Row
export default Row
export default Row
