export function getPrevIndex<T>(index: number, array: T[]) {
  if (array.length === 0) return -1
  return (index - 1 + array.length) % array.length
}

export function getNextIndex<T>(index: number, array: T[]) {
  if (array.length === 0) return -1
  return (index + 1) % array.length
}