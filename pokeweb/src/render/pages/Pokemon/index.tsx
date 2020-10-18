import React from 'react'
import { useParams } from 'react-router-dom'

const Pokemon: React.FC = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <>
      <div>Pokemon</div>
    </>
  )
}
export default Pokemon
