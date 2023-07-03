<template>
  <div>
    <div class="mb-2 mt-10 font-bold text-center text-lg">
      {{ !isCountdownEnded ? 'Begins in...' : "We're live!" }}
    </div>
    <div
      class="flex"
      v-bind="attrs"
    >
      <div
        v-for="(time, label) in countdownTime"
        class="flex-col w-20 md:w-32"
      >
        <div class="text-4xl md:text-6xl font-black bg-clip-text text-primary">
          {{ time }}
        </div>
        <span class="text-black md:text-xl uppercase font-bold">{{
          label
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCountdownTime } from '@/composables'

type CountdownProps = {
  date: Date
}

defineOptions({
  inheritAttrs: false
})

const props = defineProps<CountdownProps>()
const attrs = useAttrs()

const { countdownTime, isCountdownEnded } = useCountdownTime(props.date)
</script>
