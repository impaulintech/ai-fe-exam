export const getCurrentTimestamp = Math.floor(Date.now() / 1000)

export function decodeTimestampToDate(timestamp: number | string | undefined) {
  if (!timestamp) return 'Invalid Timestamp'

  const date = new Date(+timestamp * 1000)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-US', options)
}
