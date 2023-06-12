<template>
  <div class="flex flex-row w-full gap-10">
    <div class="text-black flex items-start pt-8 font-medium">
      <IconClock class="w-6 h-6" />
      <span class="pl-2">{{ localTime }}</span>
    </div>
    <div class="w-full">
      <div class="p-8 pl-0">
        <h1 class="text-xl font-medium">{{ item.title }}</h1>
        <p
          v-if="item.description"
          class="text-gray-500"
        >
          {{ item.description }}
        </p>
        <ul
          v-if="item.speakers"
          class="pt-2"
        >
          <li v-for="author in item.speakers">
            {{ author }}
          </li>
        </ul>
      </div>
      <div class="w-full bg-gradient-to-r from-green-400 to-blue-600 h-0.5" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { createUTCDate } from '~/utils/dates'
import { computed } from 'vue'

interface IScheduleItem {
  start: string
  title: string
  description: string
  speakers: string[]
}

interface IProps {
  item: IScheduleItem
  date: string
}

const props = defineProps<IProps>()

const localTime = computed<string>(() => {
  const date = createUTCDate(props.date, props.item.start)
  const hours = `${date.getHours()}`.padStart(2, '0')
  const minutes = `${date.getMinutes()}`.padStart(2, '0')

  return `${hours}:${minutes}`
})
</script>
