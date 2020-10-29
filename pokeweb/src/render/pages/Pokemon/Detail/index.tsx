import React, { useEffect } from 'react'
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
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { formatNamePokemon, formatHeightAndWeight } from 'src/util/formatString'

const useStyles = makeStyles({
  root: {
    marginTop: 15,
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
})
const Detail: React.FC = () => {
  const classes = useStyles()
  const state = useSelector((state: RootState) => state.pokemon)
  const dispatch = useDispatch<Dispatch>()
  const { id } = useParams()
  const { pokemon, special } = state
  const { name, weight, height } = pokemon
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
      <div>
        <Card className={classes.root} raised>
          <CardActionArea className={classes.area}>
            <CardMedia
              className={classes.media}
              image={getUrlImagePokemon(id)}
              title={formatNamePokemon(name)}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {formatNamePokemon(name)}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {formatHeightAndWeight(height)} m
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {formatHeightAndWeight(weight)} kg
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  )
}
export default Detail
