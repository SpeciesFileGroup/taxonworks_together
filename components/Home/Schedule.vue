<template>
  <section>
    <div class="container mx-auto flex flex-col p-4">
      <h1
        class="text-4xl pt-8 pb-12 scroll-mt-28"
        id="Schedule"
      >
        Schedule
      </h1>
      <template v-for="day in data.schedule">
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
            Intl.DateTimeFormat()
              .resolvedOptions()
              .timeZone.replaceAll('_', ' ')
          }})</span
        >
        <ScheduleItem
          v-for="item in day.schedule"
          :item="item"
          :date="day.date"
        />
      </template>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('schedule', () =>
  queryContent('/schedule').findOne()
)
</script>
