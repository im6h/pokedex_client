import Base from 'src/model/interface/base'
import { handleUrlPokemon } from './formatString'

export const byNumber = (arr: any[]) => {
  const result = arr?.sort((a: Base, b: Base) => {
    return handleUrlPokemon(a.url).idNumber - handleUrlPokemon(b.url).idNumber
  })
  return result
}

export const byName = (arr: any[]) => {
  const result = arr?.sort((a: Base, b: Base) => {
    return a.name.localeCompare(b.name)
  })
  return result
}
