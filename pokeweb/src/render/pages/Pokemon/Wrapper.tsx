import React, { useEffect, useState } from 'react'
import { handleUrlPokemon, formatNamePokemon } from 'src/util/formatString'
import Pokemon from 'src/render/components/pokemon'
import axios from 'axios'
import { API_URL } from 'src/config/contraints'

type Props = {
  url: string
  name: string
}
const Wrapper: React.FC<Props> = (props) => {
  const [types, setTypes] = useState<any>([])
  const { url, name } = props
  const { idNumber, idString, urlImage } = handleUrlPokemon(url)
  const getPokemon = async () => {
    const res = await axios.get(`${API_URL}/pokemon/${idNumber}`)
    if (res.status === 200 && res.data) {
      setTypes(res.data.types)
    }
  }
  useEffect(() => {
    getPokemon()
  }, [])
  return (
    <>
      <Pokemon
        name={formatNamePokemon(name)}
        idString={idString}
        urlImage={urlImage}
        types={types}
      />
    </>
  )
}
export default Wrapper
