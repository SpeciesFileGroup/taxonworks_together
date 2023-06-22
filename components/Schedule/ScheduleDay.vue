<template>
  <div class="mb-16">
    <div class="p-8 bg-black rounded-md w-auto text-white">
      <h2 class="text-2xl font-medium">
        {{
          new Date(day.date).toLocaleString('en', {
            month: 'long',
            day: 'numeric'
          })
        }}
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
        class="absolute left-9 bottom-8 h-full w-0.5 bg-gradient-to-b from-secondary to-primary"
      />
      <ScheduleItem
        v-for="item in day.schedule"
        :item="item"
        :date="day.date"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  day: {
    type: Object,
    required: true
  }
})
</script>
