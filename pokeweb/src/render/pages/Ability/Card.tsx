import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Props = {
  name: string
  idString: string
  url: string
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: '90%',
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
const CardAbility: React.FC<Props> = (props: Props) => {
  const { name, idString } = props
  const classes = useStyles()
  return (
    <>
      <Card variant="outlined" className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h6">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              #{idString}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </>
  )
}
// const WrapperChip = styled.div`
//   display: flex;
//   flex-direction: column;
// `
export default CardAbility
