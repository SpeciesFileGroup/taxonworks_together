import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import { mapObject, convertToTwoDigits } from '@/utils'

type CountdownTime<T> = {
  days: T
  hours: T
  minutes: T
  seconds: T
}

function toInt(value: number) {
  return Math.max(0, Math.floor(value))
}

function getRemainingTime(targetDate: Date) {
  const currentDate = new Date()
  const difference = targetDate.getTime() - currentDate.getTime()

  return {
    days: toInt(difference / (1000 * 60 * 60 * 24)),
    hours: toInt((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: toInt((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: toInt((difference % (1000 * 60)) / 1000)
  }
}

export function useCountdownTime(targetDate: Date) {
  const remainingTime = ref<CountdownTime<number>>(getRemainingTime(targetDate))
  const isCountdownEnded = computed(() => {
    const { seconds, minutes, hours, days } = remainingTime.value

    return !(days + hours + minutes + seconds)
  })

  const countdownTime = computed<CountdownTime<string>>(() =>
    mapObject(remainingTime.value, convertToTwoDigits)
  )

  let timer: ReturnType<typeof setInterval>

  onMounted(() => {
    if (!isCountdownEnded.value) {
      timer = setInterval(() => {
        remainingTime.value = getRemainingTime(targetDate)
      }, 1000)
    }
  })

  onBeforeUnmount(() => {
    clearInterval(timer)
  })

  return {
    countdownTime,
    isCountdownEnded
  }
}
