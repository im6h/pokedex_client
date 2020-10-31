import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, Dispatch } from 'src/store'
import { useParams } from 'react-router-dom'
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  CardActionArea,
  Chip,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { getColor } from 'src/util/color'
import { formatNamePokemon, formatHeightAndWeight } from 'src/util/formatString'

const useStyles = makeStyles({
  root: {
    marginTop: 15,
    width: '25%',
  },
  area: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  media: {
    height: 400,
    width: '50%',
    backgroundSize: 'contain',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    height: '100%',
  },
  chip: {
    width: 80,
    height: 30,
    margin: '2px 2px',
    color: 'white',
  },
})
const Detail: React.FC = () => {
  const classes = useStyles()
  const state = useSelector((state: RootState) => state.pokemon)
  const dispatch = useDispatch<Dispatch>()
  const { id } = useParams()
  const { pokemon, special } = state
  const { name, weight, height, types } = pokemon
  const getUrlImagePokemon = (idNumber: number): string => {
    let result = ''
    if (idNumber < 10) {
      result = `00${idNumber}`
    } else if (idNumber > 99) {
      result = `${idNumber}`
    } else {
      result = `0${idNumber}`
    }
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${result}.png`
  }

  useEffect(() => {
    dispatch.pokemon.getPokemon(id)
    dispatch.pokemon.getSpecial(id)
  }, [])

  return (
    <>
      <WrapperCard>
        <Card className={classes.root}>
          <CardActionArea className={classes.area}>
            <CardMedia
              className={classes.media}
              image={getUrlImagePokemon(id)}
              title={formatNamePokemon(name)}
            />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h3" component="h2">
                {formatNamePokemon(name)}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2">
                Height: {formatHeightAndWeight(height)} m
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2">
                Width: {formatHeightAndWeight(weight)} kg
              </Typography>
              <WrapperChip>
                {types?.map((e: any, idx: number) => (
                  <Chip
                    key={idx}
                    className={classes.chip}
                    style={{
                      background: getColor(e.type?.name),
                    }}
                    size="small"
                    label={formatNamePokemon(e.type?.name)}
                  />
                ))}
              </WrapperChip>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea className={classes.area}>
            <CardMedia
              className={classes.media}
              image={getUrlImagePokemon(id)}
              title={formatNamePokemon(name)}
            />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h3" component="h2">
                {formatNamePokemon(name)}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2">
                Height: {formatHeightAndWeight(height)} m
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2">
                Width: {formatHeightAndWeight(weight)} kg
              </Typography>
              <WrapperChip>
                {types?.map((e: any, idx: number) => (
                  <Chip
                    key={idx}
                    className={classes.chip}
                    style={{
                      background: getColor(e.type?.name),
                    }}
                    size="small"
                    label={formatNamePokemon(e.type?.name)}
                  />
                ))}
              </WrapperChip>
            </CardContent>
          </CardActionArea>
        </Card>
      </WrapperCard>
    </>
  )
}
const WrapperCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const WrapperChip = styled.div`
  display: flex;
`
export default Detail
