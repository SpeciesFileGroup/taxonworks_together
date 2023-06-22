export function localeDate(date?: Date) {
  const d = date || new Date()

  return new Date(d.toLocaleString('en-US'))
}

export function createUTCDate(dateString: string, timeString: string): Date {
  const [hours = '00', minutes = '00', seconds = '00'] = timeString.split(':')
  const time = [hours, minutes, seconds].join(':')

  return new Date(`${dateString}T${time}.000Z`)
}

export function normalizeUTCDate(date: string, time: string) {
  const [hours = '00', minutes = '00', seconds = '00'] = time.split(':')
  const timeString = [hours, minutes, seconds].join(':')

  return new Date(`${date}T${timeString}.000Z`)
}
