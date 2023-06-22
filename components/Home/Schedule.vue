<template>
  <section>
    <div class="container mx-auto flex flex-col p-4">
      <h1
        class="text-4xl pt-8 pb-12 scroll-mt-28"
        id="Schedule"
      >
        Schedule
      </h1>
      <template
        v-for="(day, index) in data.schedule"
        :key="index"
      >
        <ScheduleDay
          class="mb-16"
          :day="day"
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
