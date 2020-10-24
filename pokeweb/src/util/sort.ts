import Base from 'src/model/interface/base'
import { handleUrlPokemon } from './formatString'

export const sortArray: any = (arr: any[]) => {
  const byNumber = arr.sort((a: Base, b: Base) => {
    return handleUrlPokemon(a.url).idNumber - handleUrlPokemon(b.url).idNumber
  })

  const byName = arr.sort((a: Base, b: Base) => {
    return a.name.localeCompare(b.name)
  })

  return {
    byNumber,
    byName,
  }
}
