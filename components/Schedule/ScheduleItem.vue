<template>
  <div class="flex flex-row w-full gap-10 relative">
    <div class="text-black flex items-start pt-6 font-bold">
      <div
        class="p-0.5 rounded-full"
        :class="
          item.highlight ? 'bg-primary-dark text-white' : 'bg-primary-dark'
        "
      >
        <div
          class="px-4 py-2 rounded-full"
          :class="!item.highlight && 'bg-white'"
        >
          {{ localTime }}
        </div>
      </div>
    </div>
    <div class="w-full border-b border-gray-200">
      <div class="p-8 pl-0">
        <h1
          class="text-lg font-bold"
          :class="item.highlight && 'text-primary-dark'"
        >
          {{ item.title }}
        </h1>
        <ul
          v-if="item.speakers"
          class="pb-2"
        >
          <li
            v-for="author in item.speakers"
            class="font-medium text-primary-dark"
          >
            {{ author }}
          </li>
        </ul>
        <p
          v-if="item.description"
          class="text-gray-500 text-sm"
          v-html="item.description"
        />
      </div>
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
  highlight?: boolean
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
