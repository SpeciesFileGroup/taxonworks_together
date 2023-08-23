<template>
  <div class="flex gap-2 items-center">
    <div
      v-if="speakerStored?.img"
      class="flex gap-2 items-center"
    >
      <img
        class="w-10 h-10 rounded-full object-cover"
        :src="speakerStored.img"
      />
    </div>
    <div
      v-else
      class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
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
      class="flex flex-col"
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

const speakerName: string =
  typeof props.speaker === 'string' ? props.speaker : props.speaker.name

const speakerStored: ISpeaker | undefined = data.value.find(
  (item: ISpeaker) => item.name === speakerName
)
</script>
