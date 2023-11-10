<template>
  <div>
    <div class="font-bold text-lg text-center">
      {{ !isCountdownEnded ? 'Begins in...' : "We're live!" }}
    </div>
    <div
      class="flex mt-4 gap-8 md:gap-16"
      v-bind="attrs"
    >
      <div
        v-for="(time, label) in countdownTime"
        class="flex flex-col"
      >
        <div class="text-4xl md:text-6xl font-black bg-clip-text text-primary">
          {{ time }}
        </div>
        <span class="text-black md:text-lg uppercase font-bold">{{
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
