export function convertToTwoDigits(value: string | number): string {
  return String(value).padStart(2, '0')
}
