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
      <span>{{ speaker.name }}</span>
      <span class="text-secondary">
        {{ speaker.title }}
      </span>
    </div>
    <div
      v-else
      class="flex flex-col py-2"
    >
      <span>{{ speaker }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ISpeaker } from '@/interfaces'

interface IProps {
  speaker: ISpeaker | string
}

const props = defineProps<IProps>()
const { data } = useNuxtData('home-speakers')

const speakerName = computed<string>(() =>
  typeof props.speaker === 'string' ? props.speaker : props.speaker.name
)

const speakerStored: ISpeaker | undefined = data.value.find(
  (item: ISpeaker) => item.name === speakerName.value
)
</script>
