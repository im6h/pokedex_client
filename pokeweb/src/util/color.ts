import { COLOR } from '../config/contraints'

export const getColor = (type: any): string => {
  return COLOR[type] || COLOR.typeNormal
}
