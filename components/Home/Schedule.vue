<template>
  <section>
    <div class="container mx-auto flex flex-col px-4 md:px-8 py-16 md:py-20">
      <h1
        class="text-4xl md:text-5xl pt-8 pb-12 scroll-mt-40"
        id="Schedule"
      >
        Schedule
      </h1>
      <template
        v-for="(day, index) in data.schedule"
        :key="index"
      >
        <ScheduleDay
          class="mb-16 text-hind"
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
