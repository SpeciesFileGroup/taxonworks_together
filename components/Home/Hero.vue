<template>
  <section
    class="relative min-h-screen overflow-y-hidden bg-[rgba(205,202,186,.35)] flex flex-col items-center justify-center"
  >
    <div class="h-20"></div>
    <div
      ref="canvasBackground"
      class="w-full h-full absolute transition opacity-0 duration-1000 ease-in"
    >
      <LinkedCanvas class="w-full absolute h-full blur-sm" />
      <LinkedCanvas class="w-full absolute h-full" />
    </div>
    <div class="container mx-auto relative p-4 pb-20 px-8 max-w-5xl">
      <TWTLogoHome class="mx-auto md:h-52 lg:h-48 xl:h-52 2xl:h-72" />
      <div
        ref="containerElement"
        class="transition delay-[1.25s] opacity-0 duration-500 ease-in"
      >
        <div class="flex justify-center w-full items-center">
          <h2
            class="text-justify pt-10 md:pt-24 text-lg md:text-xl font-medium md:w-3/4"
          >
            {{ data.description }}
          </h2>
        </div>

        <div class="h-48 flex flex-col justify-center mt-20 items-center">
          <div
            ref="calendarElement"
            class="flex transition delay-[1.25s] opacity-0 duration-500 ease-in"
          >
            <ClientOnly>
              <div
                class="flex gap-2 rounded-md px-4 py-2 text-base items-center text-primary-dark xl:text-lg bg-primary bg-opacity-50 mb-10"
              >
                <IconCalendar class="h-6 w-6" />
                <span>
                  {{ getDayFromSchedule().join('-') }}
                  {{
                    date.toLocaleString('en', {
                      month: 'long'
                    })
                  }}
                  <span class="hidden sm:inline"> | </span>

                  <span class="block sm:inline">
                    <span> {{ timeString }}</span>
                    HR -
                    <span>{{
                      Intl.DateTimeFormat()
                        .resolvedOptions()
                        .timeZone.replaceAll('_', ' ')
                        .split('/')
                        .pop()
                    }}</span>
                  </span>
                </span>
              </div>
            </ClientOnly>
          </div>
          <ClientOnly>
            <p
              v-if="eventEnded"
              class="text-xl font-bold p-10 text-center"
            >
              Thank you all for participating, see you next year!
            </p>
            <Countdown
              v-else
              class="flex text-center justify-center"
              :date="date"
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { normalizeUTCDate, createUTCDate, convertToTwoDigits } from '@/utils'

const { data } = await useAsyncData('event', () =>
  queryContent('/event').findOne()
)

const { data: scheduleData } = await useAsyncData('home-schedule', () =>
  queryContent('/schedule').findOne()
)

const date = computed(() => {
  const firstDay = scheduleData.value.schedule.find(
    (day) => day.date && day.schedule[0]?.start
  )

  return normalizeUTCDate(firstDay.date, firstDay.schedule[0].start)
})

const eventEnded = computed(() => {
  const lastDay = scheduleData.value.schedule.findLast(
    (day) => day.date && day.schedule.at(-1)?.start
  )

  return (
    normalizeUTCDate(lastDay.date, lastDay.schedule.at(-1).start) < Date.now()
  )
})

const timeString = computed(() => {
  const time = date.value
  const hours = convertToTwoDigits(time.getHours())
  const minutes = convertToTwoDigits(time.getMinutes())

  return minutes == '00' ? hours : `${hours}:${minutes}`
})

const containerElement = ref(null)
const calendarElement = ref(null)
const canvasBackground = ref(null)

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

onMounted(() => {
  containerElement.value.classList.add('opacity-100')
  calendarElement.value.classList.add('opacity-100')
  canvasBackground.value.classList.add('opacity-40')
})
</script>
