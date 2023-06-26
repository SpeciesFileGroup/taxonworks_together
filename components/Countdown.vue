<template>
  <div>
    <div class="mb-2 mt-10 font-bold text-center text-lg">
      {{ !countdownEnded ? 'Begins in...' : "We're live!" }}
    </div>
    <div
      class="flex"
      v-bind="attrs"
    >
      <div
        v-for="{ label, value } in time"
        class="flex-col w-20 md:w-32"
      >
        <div class="text-4xl md:text-6xl font-black bg-clip-text text-primary">
          {{ value }}
        </div>
        <span class="text-black md:text-xl uppercase font-bold">{{
          label
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRemainingTime } from '@/composables/useRemainingTime'

type CountdownProps = {
  date: Date
}

defineOptions({
  inheritAttrs: false
})

const props = defineProps<CountdownProps>()
const attrs = useAttrs()

const { countdownTime, countdownEnded } = useRemainingTime(props.date)
const time = computed(() => [
  { label: 'Days', value: countdownTime.value.days },
  { label: 'Hours', value: countdownTime.value.hours },
  { label: 'Minutes', value: countdownTime.value.minutes },
  { label: 'Seconds', value: countdownTime.value.seconds }
])
</script>
