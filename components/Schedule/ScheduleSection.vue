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
          <span v-if="props.item.start">{{ localTime }}</span>
          <span
            v-else
            title="To be defined"
          >
            TBD
          </span>
        </div>
      </div>
    </div>
    <div class="w-full border-b border-gray-200">
      <ScheduleSymposia
        v-if="item.type === TALK_TYPE.Symposia"
        :item="item"
      />
      <ScheduleUnconference
        v-else-if="item.type === TALK_TYPE.Unconference"
        :item="item"
      />
      <ScheduleTalk
        v-else
        :item="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { createUTCDate } from '~/utils/dates'
import { IScheduleItem } from '@/interfaces'

interface IProps {
  item: IScheduleItem
  date: string
}

const TALK_TYPE = {
  Symposia: 'symposia',
  Unconference: 'unconference'
}

const props = defineProps<IProps>()

const localTime = computed<string>(() => {
  const date = createUTCDate(props.date, props.item.start)
  const hours = `${date.getHours()}`.padStart(2, '0')
  const minutes = `${date.getMinutes()}`.padStart(2, '0')

  return `${hours}:${minutes}`
})
</script>
