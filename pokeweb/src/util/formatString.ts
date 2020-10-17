export const formatName = (name: string): string => {
  let result = ''
  result = name.charAt(0).toUpperCase() + name.slice(1)
  return result
}
