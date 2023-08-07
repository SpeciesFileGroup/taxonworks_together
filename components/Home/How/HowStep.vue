<template>
  <div class="flex gap-8">
    <div
      class="flex h-8 w-8 shrink-0 items-center justify-center md:h-16 md:w-16 md:text-3xl w bg-gradient-to-tl from-primary to-secondary text-white font-medium font-hind"
    >
      {{ convertToTwoDigits(index + 1) }}
    </div>
    <div
      class="flex w-full flex-col items-center justify-between gap-4 rounded-md md:flex-row md:gap-10 pb-4 md:pb-8 relative"
    >
      <div class="flex flex-col items-start gap-2 md:gap-4 w-full">
        <div>
          <div class="md:text-xl font-bold text-primary">
            {{ title }}

            <span
              class="text-base text-white italic font-normal"
              v-if="required"
            >
              - (Required)</span
            >
          </div>
          <ContentRenderer
            :value="textParsed"
            class="mt-2 text-sm text-heather md:text-base"
          />
        </div>
      </div>
      <div
        class="from-primary to-secondary w-full h-px bg-gradient-to-r absolute bottom-0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { convertToTwoDigits } from '@/utils'
import markdownParser from '@nuxt/content/transformers/markdown'

interface Props {
  title: string
  text: string
  required: boolean
  index: number
}

const props = withDefaults(defineProps<Props>(), { required: false })

const textParsed = await markdownParser.parse(
  `how-step-${props.index}`,
  props.text
)
</script>

<style scoped>
:deep(a) {
  @apply text-primary;
}
</style>
