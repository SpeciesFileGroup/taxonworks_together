export function mapObject<T extends object, U>(
  obj: T,
  mapper: (value: T[keyof T], key: keyof T) => U
): { [key in keyof T]: U } {
  const mappedObject = {} as { [key in keyof T]: U }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]
      mappedObject[key] = mapper(value, key)
    }
  }

  return mappedObject
}
