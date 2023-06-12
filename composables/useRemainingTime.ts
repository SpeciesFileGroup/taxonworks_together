import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import { localeDate } from '@/utils/dates'

type RemainingDate<T> = {
  days: T
  hours: T
  minutes: T
  seconds: T
}

function mapValues(
  object: { [key: string]: unknown },
  iterator: (key: unknown) => void
) {
  return Object.keys(object).reduce((acc, key) => {
    acc[key] = iterator(object[key])
    return acc
  }, {})
}

const alwaysPositive = (value: number) => Math.max(0, value)

function getRemainingTime(targetDate: Date) {
  const currentDate = localeDate()
  const diff = targetDate.getTime() - currentDate.getTime()
  const days = alwaysPositive(Math.floor(diff / (1000 * 60 * 60 * 24)))
  const hours = alwaysPositive(
    Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  )
  const minutes = alwaysPositive(
    Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  )
  const seconds = alwaysPositive(Math.floor((diff % (1000 * 60)) / 1000))
  return { days, hours, minutes, seconds }
}

function fillZeros(remainingDate: RemainingDate<number>) {
  return mapValues(remainingDate, (value) =>
    `${value}`.padStart(2, '0')
  ) as RemainingDate<string>
}

export function useRemainingTime(targetDate: Date) {
  const remainingDate = ref(getRemainingTime(targetDate))

  const continueCountdown = computed(() => {
    const { seconds, minutes, hours, days } = remainingDate.value

    return days === 0 && hours === 0 && minutes === 0 && seconds === 0
  })

  const countdownTime = computed(() => fillZeros(remainingDate.value))

  let timer: any

  onMounted(() => {
    timer =
      !continueCountdown.value &&
      setInterval(() => {
        remainingDate.value = getRemainingTime(targetDate)
      }, 1000)
  })

  onBeforeUnmount(() => {
    clearInterval(timer)
  })

  return {
    countdownTime,
    countdownEnded: continueCountdown
  }
}
