import React, { useEffect, useState } from 'react'
import api from 'src/service/generation'
import { Paper, Typography, Tooltip } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { Generation, generationInstance } from 'src/model/interface/generation'
import { formatGenerationName, formatNamePokemon } from 'src/util/formatString'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
  idx: number
}
const useStyles = makeStyles(theme => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

const PaperItem: React.FC<Props> = (props: Props) => {
  const classes = useStyles()
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
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h5" component="h1">
          {formatGenerationName(generation.name || 'Hello-Hello') || '-'}
        </Typography>
        <Typography>
          Region:{' '}
          {formatNamePokemon(generation.main_region?.name || 'Pikachu') || '-'}
        </Typography>
        <Typography onClick={clickMove}>
          <Tooltip title={`move generation ${idx}`} placement="top-start">
            <span>Move: +{generation.moves?.length}</span>
          </Tooltip>
        </Typography>
        <Typography onClick={clickPokemon}>
          <Tooltip title={`pokemon generation ${idx}`} placement="top-start">
            <span>Pokemon: +{generation.pokemon_species?.length}</span>
          </Tooltip>
        </Typography>
        <Typography onClick={clickAbility}>
          <Tooltip title={`ability generation ${idx}`} placement="top-start">
            <span>Ability: +{generation.abilities?.length}</span>
          </Tooltip>
        </Typography>
        <Typography onClick={clickType}>
          <Tooltip title={`type generation ${idx}`} placement="top-start">
            <span>Type: +{generation.types?.length}</span>
          </Tooltip>
        </Typography>
      </Paper>
    </>
  )
}
export default PaperItem
