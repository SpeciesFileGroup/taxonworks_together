<template>
  <section class="bg-[#fafaf5] relative">
    <div class="container mx-auto px-8 py-16 md:py-20">
      <h1
        class="text-4xl md:text-5xl pt-8 scroll-mt-36 md:scroll-mt-40"
        id="When"
      >
        When
      </h1>
      <ContentRenderer :value="data">
        <div class="flex">
          <div class="prose prose-base md:prose-lg max-w-none font-hind">
            <div id="content:when.md">
              <h3 class="text-primary-dark">
                {{ getDayFromSchedule().join(' - ') }}
                {{
                  date.toLocaleString('en', {
                    month: 'long'
                  })
                }}
                {{ date.getFullYear() }}
              </h3>
            </div>
            <ContentRendererMarkdown :value="data" />
          </div>
          <div class="hidden lg:block">
            <ImageCalendar class="h-96 lg:h-72" />
          </div>
        </div>
        <template #empty></template>
      </ContentRenderer>
    </div>
  </section>
</template>

<script setup>
import { normalizeUTCDate, createUTCDate, getCardinalNumber } from '@/utils'

const { data } = await useAsyncData('home-when', () =>
  queryContent('/when').findOne()
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

function getDayFromSchedule() {
  const { schedule } = scheduleData.value
  const days = []

  schedule.forEach((day) => {
    const time = day.schedule[0]?.start

    if (time) {
      days.push(createUTCDate(day.date, time).getDate())
    }
  })

  return days.length > 1
    ? [days[0], getCardinalNumber(days.at(-1))]
    : getCardinalNumber([days[0]])
}
</script>
