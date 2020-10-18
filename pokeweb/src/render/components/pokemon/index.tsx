import React from 'react'
import styled from 'styled-components'
import {
  Chip,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { formatName } from 'src/util/formatString'
import { getColor } from 'src/util/color'

type Props = {
  url: string
  alt: string
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
    chip: {
      width: 70,
      height: 20,
      margin: '2px 0px',
      color: 'white',
    },
  }),
)
const Pokemon: React.FC<Props> = (props: Props) => {
  const { url, alt } = props
  const classes = useStyles()
  const types: string[] = ['fire', 'flying']

  return (
    <>
      <Card variant="outlined" className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Charizard
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              #001
            </Typography>
            <WrapperChip>
              {types.map((type: string) => (
                <Chip
                  key={type}
                  className={classes.chip}
                  style={{
                    background: getColor(type),
                  }}
                  size="small"
                  label={formatName(type)}
                />
              ))}
            </WrapperChip>
          </CardContent>
        </div>
        <CardMedia className={classes.cover} image={url} title={alt} />
      </Card>
    </>
  )
}
const WrapperChip = styled.div`
  display: flex;
  flex-direction: column;
`
export default Pokemon
