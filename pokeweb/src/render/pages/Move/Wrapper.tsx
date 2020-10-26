import React from 'react'
import Card from './Card'
import { handleUrlPokemon } from 'src/util/formatString'

type Props = {
  url: string
  name: string
}

const Wrapper: React.FC<Props> = (props: Props) => {
  const { url, name } = props

  return (
    <>
      <Card name={name} idString={handleUrlPokemon(url).idString} url={url} />
    </>
  )
}
export default Wrapper
