<template>
  <div class="mb-16">
    <div class="p-8 bg-secondary rounded-md w-auto text-white">
      <h2 class="text-2xl font-medium">
        {{ scheduleDate }}
        - {{ day.topic }}
      </h2>
      <span class="text-sm"
        >Time expressed in your local timezone ({{
          Intl.DateTimeFormat().resolvedOptions().timeZone.replaceAll('_', ' ')
        }})</span
      >
    </div>
    <div class="relative overflow-y-hidden">
      <div
        class="absolute left-9 bottom-8 h-full w-0.5 bg-gradient-to-b from-secondary to-primary-dark"
      />
      <ScheduleSection
        v-for="item in day.schedule"
        :item="item"
        :date="day.date"
      />
    </div>
  </div>
</template>

<script setup>
import { normalizeUTCDate, getCardinalNumber } from '@/utils'
import { computed } from 'vue'

const props = defineProps({
  day: {
    type: Object,
    required: true
  }
})

const scheduleDate = computed(() => {
  const time = props.day.schedule[0].start

  return parseDate(normalizeUTCDate(props.day.date, time))
})

function parseDate(dateObj) {
  const day = dateObj.getDate()
  const month = dateObj.toLocaleString('en', { month: 'long' })

  return `${month} ${getCardinalNumber(day)}`
}
</script>
