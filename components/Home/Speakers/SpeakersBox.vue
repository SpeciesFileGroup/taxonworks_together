<template>
  <div class="flex flex-row bg-secondary rounded-md sm:p-8 p-4">
    <img
      v-if="speaker.img"
      class="sm:w-40 sm:min-w-[10rem] sm:max-w-[10rem] sm:h-40 sm:max-h-[10rem] object-cover rounded-full w-32 max-w-[8rem] h-32 max-h-[8rem] min-w-[8rem] self-center"
      :src="speaker.img"
      :alt="speaker.name"
    />
    <div
      class="w-40 min-w-[10rem] max-w-[10rem] h-40 max-h-[10rem] bg-secondary-dark flex items-center justify-center rounded-full"
      v-else
    >
      <IconPerson class="w-20 h-20 stroke-primary" />
    </div>
    <div
      class="text-white flex flex-col items-start rounded-r-md text-left p-4 sm:p-8 pr-0"
    >
      <span class="font-bold text-2xl text-primary">{{ speaker.name }}</span>
      <span class="mt-2">{{ speaker.description }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  speaker: {
    name: string
    img?: string
    description: string
  }
}

defineProps<IProps>()
</script>
