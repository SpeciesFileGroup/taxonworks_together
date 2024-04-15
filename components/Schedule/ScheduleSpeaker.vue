<template>
  <div class="flex flex-row gap-2 items-start">
    <div
      v-if="speakerStored?.img"
      class="w-10 flex-shrink-0"
    >
      <img
        class="w-10 h-10 rounded-full object-cover"
        :src="speakerStored.img"
        :alt="speakerName"
      />
    </div>
    <div
      v-else
      class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center min-w-10 flex-shrink-0"
    >
      <IconPerson class="w-5 h-5 stroke-primary" />
    </div>
    <div
      v-if="typeof speaker === 'object'"
      class="flex flex-col"
    >
      <span class="font-bold">{{ speaker.name }}</span>

      <span class="text-secondary text-sm">
        {{ speaker.title }}
      </span>
      <div class="flex flex-wrap gap-1">
        <a
          v-for="(link, index) in speaker?.video"
          :href="link"
          class="text-primary-dark text-sm"
        >
          🎞️ Video
        </a>
        <a
          v-if="speaker.talk"
          :href="speaker.talk"
          class="text-primary-dark text-sm"
        >
          🔗 Presentation
        </a>
      </div>
    </div>
    <div
      v-else
      class="flex flex-col py-2"
    >
      <span class="font-bold">{{ speaker }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISpeaker } from '@/interfaces'

interface IProps {
  speaker: ISpeaker | string
}

const props = defineProps<IProps>()
const { data } = await useAsyncData('home-speakers', () =>
  queryContent('speakers').find()
)

const speakerName = computed<string>(() =>
  typeof props.speaker === 'string' ? props.speaker : props.speaker.name
)

const speakerStored: ISpeaker | undefined = data.value.find(
  (item: ISpeaker) => item.name === speakerName.value
)
</script>
