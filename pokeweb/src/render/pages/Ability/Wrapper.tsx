import React from 'react'
import CardAbility from './Card'
import { handleUrlPokemon, formatNamePokemon } from 'src/util/formatString'

type Props = {
  url: string
  name: string
}

const Wrapper: React.FC<Props> = (props: Props) => {
  const { url, name } = props

  return (
    <>
      <CardAbility
        name={formatNamePokemon(name)}
        idString={handleUrlPokemon(url).idString}
        url={url}
      />
    </>
  )
}
export default Wrapper
