<template>
  <div class="flex flex-col items-center">
    <img
      v-if="speaker.img"
      class="w-40 h-40 rounded-full object-cover"
      :src="speaker.img"
      :alt="speaker.name"
    />
    <div
      class="w-40 h-40 rounded-full bg-secondary-dark flex items-center justify-center"
      v-else
    >
      <IconPerson class="w-20 h-20 stroke-primary" />
    </div>
    <div
      class="relative bottom-4 bg-secondary w-44 text-white text-center p-2 flex flex-col rounded-md min-h-[80px]"
    >
      <span class="font-bold">{{ speaker.name }}</span>
      <span class="text-xs mt-1">{{ speaker.description }}</span>
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
