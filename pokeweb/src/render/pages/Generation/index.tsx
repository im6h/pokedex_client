import React, { useEffect, useState } from 'react'
import WrapperTable from 'src/render/components/table'
import WrapperTimeLine from 'src/render/components/timeline'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'src/store'
import { Switch, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    marginTop: '10px',
  },
  switch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  table: {
    minWidth: 650,
  },
})

const Generation: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch<Dispatch>()
  const [check, setCheck] = useState(true)
  const handleChange = () => {
    setCheck(!check)
  }

  useEffect(() => {
    dispatch.generation.getGenerations()
    dispatch.move.getMoves(0)
    dispatch.pokemon.getPokemons(0)
    dispatch.ability.getAbilities(0)
    dispatch.type.getTypes(0)
  }, [])

  return (
    <>
      <div className={classes.root}>
        <div className={classes.switch}>
          <Typography variant="h6" color={check ? 'primary' : 'initial'}>
            Table
          </Typography>
          <Switch checked={!check} onChange={handleChange} />
          <Typography variant="h6" color={!check ? 'primary' : 'initial'}>
            Tree
          </Typography>
        </div>
        {check ? <WrapperTable /> : <WrapperTimeLine />}
      </div>
    </>
  )
}
export default Generation
