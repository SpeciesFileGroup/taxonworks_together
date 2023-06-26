<template>
  <section
    class="relative h-screen overflow-y-hidden bg-[rgba(205,202,186,.35)]"
  >
    <LinkedCanvas class="w-full absolute opacity-40 h-full blur-sm" />
    <LinkedCanvas class="w-full absolute opacity-40 h-full" />
    <div class="container mx-auto top-1/2 relative -translate-y-1/2 p-4 px-8">
      <TWTLogo2023 class="sm:h-52 xl:h-72 mx-auto" />
      <h2 class="text-center pt-8 pb-8 text-xl font-medium">
        {{ data.description }}
      </h2>

      <div class="flex justify-center">
        <p
          class="flex flex-col items-center text-6xl font-bold text-transparent transition cursor-pointer bg-clip-text bg-primary hover:scale-125"
        >
          <span class="font-black text-4xl md:text-5xl tracking-tighter">{{
            getDayFromSchedule().join(' - ')
          }}</span>
          <span class="text-3xl md:text-4xl tracking-wider capitalize">{{
            date.toLocaleString('en', {
              month: 'long'
            })
          }}</span>
          <span class="text-lg">
            <ClientOnly>
              <span> {{ timeString }}</span>
              HR -
              <span>{{
                Intl.DateTimeFormat()
                  .resolvedOptions()
                  .timeZone.replaceAll('_', ' ')
                  .split('/')
                  .pop()
              }}</span>
            </ClientOnly>
          </span>
        </p>
      </div>
      <h2 class="text-center text-3xl font-medium text-primary-dark hidden">
        {{ data.date_title }}
      </h2>
      <div class="h-32 flex justify-center px-8">
        <ClientOnly>
          <Countdown
            class="flex text-center justify-center items-center"
            :date="date"
          />
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup>
import { normalizeUTCDate } from '@/utils/dates'
import { createUTCDate } from '~/utils/dates'

const { data } = await useAsyncData('event', () =>
  queryContent('/event').findOne()
)

const { data: scheduleData } = await useAsyncData('schedule', () =>
  queryContent('/schedule').findOne()
)

const date = computed(() => {
  const firstDay = scheduleData.value.schedule.find(
    (day) => day.date && day.schedule[0]?.start
  )

  return normalizeUTCDate(firstDay.date, firstDay.schedule[0].start)
})

const timeString = computed(() => {
  const time = date.value
  const hours = `${time.getHours()}`.padStart(2, '0')
  const minutes = `${time.getMinutes()}`.padStart(2, '0')

  return minutes == '00' ? hours : `${hours}:${minutes}`
})

function getDayFromSchedule() {
  const schedules = scheduleData.value.schedule
  const days = []

  schedules.forEach((day) => {
    const time = day.schedule[0]?.start

    if (time) {
      days.push(createUTCDate(day.date, time).getDate())
    }
  })

  return days.length > 2 ? [days[0], days.at(-1)] : days
}
</script>
<style>
sd {
  color: rgba(205, 202, 186, 1);
}
</style>
