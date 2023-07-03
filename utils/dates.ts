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

export function getCardinalNumber(n: number): string {
  const nthNumber = (number: number) => {
    if (number > 3 && number < 21) return 'th'
    switch (number % 10) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd'
      default:
        return 'th'
    }
  }

  return `${n}${nthNumber(n)}`
}
